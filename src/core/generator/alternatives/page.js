import { linkSkeleton, generatePageCSSRules } from '../generator-utils';
import { extractSkeletonFromItem } from '../skeletons/utils';
import { getSortedByPreference } from '../color/utils';
import { buildPageColorBlueprint } from '../color/page';
import { colorGroup } from '../color/group';
import { colorElement } from '../color/element';
import { cloneDeep, omit, values, filter, isEqual, reduce, uniqueId, merge, forEach, includes } from 'lodash';
import tinycolor from 'tinycolor2';
import { getMode, randomItem } from '../../utils'
import { headings, paragraphs } from './../fonts'
import { fontDetails } from './../fonts'

export const palettes = [
  // ["#E37222","#07889B","#66B98F","#EEAA7B"],
  ["#96858F","#6D7993","#9099A2","#D5D5D5"],
  // ["#CAEBF2","#A9A9A9","#FF3B3F"],
  ["#D7CEC7","#565656","#76323F","#C09F80"],
  // ["#18121E","#233237","#984B43","#EAC67A"],
  // ["#0B3C5D","#328CC1","#D9B310","#1D2731"],
  // ["#77C9D4","#57BC90","#015249","#A5A5AF"],
  ["#6B7A8F","#F7882F","#F7C331","#DCC7AA"],
  ["#CF6766","#30415D","#031424","#8EAEBD"],
  // ["#99D3DF","#88BBD6","#CDCDCD","#E9E9E9"],
  ["#6BBAA7","#FBA100","#6C648B","#B6A19E"],
  ["#CDA34F","#E9E7DA","#636B46","#373F27"],
  ["#4ABDAC","#99CED4","#EEB6B7","#6E7376"],
  ["#155765","#57652A","#AB9353","#4D2C3D"],
  ["#F7EF6A","#93C178","#465C8B","#DFDCE3"],
  ["#A7D2CB","#F2D388","#C98474","#874C62"],
  ["#CAE4DB","#DCAE1D","#00303F","#7A9D96"],
  ["#062F4F","#813772","#B82601"],
]

export function generateRandomPalette() {
  //TODO: input a number and generate that many colors?
  return randomItem(palettes);
}

export function generatePageBrandColorAlternatives(page) {
  const validPalettes = filter(palettes, palette => !isEqual(palette, page.colorBlueprint.colors))
  const pages = validPalettes.map(palette => generatePageFromPalette(page, palette));
  return pages;
}

export function generatePageFromPalette(page, palette) {
  const _page = { id: uniqueId(), style: page.style }

  const colorBlueprint = buildPageColorBlueprint(palette);
  
  _page.colorBlueprint = colorBlueprint;

  const colorMapping = {
    [page.colorBlueprint.primary]: colorBlueprint.primary,
    [page.colorBlueprint.lightGray]: colorBlueprint.lightGray,
    [page.colorBlueprint.darkGray]: colorBlueprint.darkGray,
    '#ffffff': '#ffffff',
    '#transparent': '#transparent',
  }
  _page.images = cloneDeep(page.images);
  _page.backgroundImages = cloneDeep(page.backgroundImages);
  _page.sections = reduce(page.sections, (sections, section) => {
    const skeleton = extractSkeletonFromItem(section);
    
    const background = colorMapping[section.color.background] || 
                        getSortedByPreference(colorBlueprint.backgrounds, skeleton.blueprint.color.background)[0];
    skeleton.color = { ...skeleton.color, background };

    linkSkeleton(skeleton);
    skeleton._groups.forEach(e => e.color = {});
    skeleton._elements.forEach(e => e.color = {});
    
    const tempPage = {sections, colorBlueprint};
    skeleton._groups.forEach(g => colorGroup(g, tempPage));
    skeleton._elements.forEach(e => colorElement(e, tempPage));

    return [...sections, skeleton];
  }, []);

  _page.sections[0].changes = { palette };
  generatePageCSSRules(_page);
  return _page;
}


export function generatePageFromTypography(page, typography) {
  const _page = {...page, id: uniqueId()};
  _page.style.typography = typography;
  _page.sections = page.sections.map(section => {
    const skeleton = extractSkeletonFromItem(section);
    linkSkeleton(skeleton);
    skeleton._elements.forEach(e => {
      let _typography = typography.paragraph;
      if(e.name === 'BasicHeading') {
        _typography = typography.heading;
      } else if(e.name === 'BasicKicker') {
        _typography = typography.kicker;
      }
      e.style = {...e.style, ..._typography};
    })
    return skeleton;
  })
  return _page;
}

export function generateTypographyAlternatives(fonts, page) {
  const typography = {
    heading: { fontFamily: fonts.heading, fontWeight: 8 , },
    paragraph: { fontFamily: fonts.normal, fontWeight: 4 },//or 1
  }
  calculateHeaderAndParagraph(typography);
  typography.smallHeading = { fontFamily: typography.paragraph.fontFamily, fontWeight: 8 };
  typography.subHeading = { fontFamily: typography.paragraph.fontFamily, fontWeight: 4 };
  typography.kicker = { fontFamily: typography.paragraph.fontFamily, textTransform: "uppercase" };
  calculateTypographySizes(typography);
  calculateTypographyWeights(typography);
  calculateTypographyTransform(typography);
  return typography
}

export function calculateTypographyTransform(typography) {
  const fontDetail = fontDetails[typography.heading.fontFamily];
  const textTransform = randomItem(fontDetail.canTransform);
  typography.heading.textTransform = textTransform;
}

export function calculateHeaderAndParagraph(typography) {
  const pFamily = typography.paragraph.fontFamily;
  if(!typography.heading.fontFamily) {
    typography.heading.fontFamily = pFamily 
      ? randomItem(paragraphs[pFamily])
      : randomItem(Object.keys(headings));
  }
  const hFamily = typography.heading.fontFamily;
  if(!pFamily) {
    typography.paragraph.fontFamily = randomItem(headings[hFamily]);
  }
}

export function calculateTypographyWeights(typography) {
  const typeOptionA = {
    heading: { fontWeight: 7 },
    paragraph: { fontWeight: 4 },
    smallHeading: { fontWeight: 7 },
    subHeading: { fontWeight: 4 },
    kicker: { fontWeight: 4 },
  }
  const typeOptionB = {
    heading: { fontWeight: 7 },
    paragraph: { fontWeight: 4 },
    smallHeading: { fontWeight: 7 },
    subHeading: { fontWeight: 7 },
    kicker: { fontWeight: 1 }, 
  }
  const typeOptionC = {
    heading: { fontWeight: 4 },
    paragraph: { fontWeight: 1 },
    smallHeading: { fontWeight: 4 },
    subHeading: { fontWeight: 4 },
    kicker: { fontWeight: 1 },
  }
  const typeOptionD = {
    heading: { fontWeight: 4 },
    paragraph: { fontWeight: 4 },
    smallHeading: { fontWeight: 4 },
    subHeading: { fontWeight: 4 },
    kicker: { fontWeight: 4 },
  }
  const option = randomItem([typeOptionA, typeOptionB, typeOptionC, typeOptionD]);
  merge(typography, option);
}
export function calculateTypographySizes(typography) {
  const sizeOptionA = {
    heading: { fontSize: 10 },
    paragraph: { fontSize: 4 },
    smallHeading: { fontSize: 6 },
    subHeading: { fontSize: 5 },
    kicker: { fontSize: 3 },
  }
  const sizeOptionB = {
    heading: { fontSize: 9 },
    paragraph: { fontSize: 3 },
    smallHeading: { fontSize: 5 },
    subHeading: { fontSize: 4 },
    kicker: { fontSize: 2 },
  }
  const sizeOptionC = {
    heading: { fontSize: 9 },
    paragraph: { fontSize: 4 },
    smallHeading: { fontSize: 7 },
    subHeading: { fontSize: 4 },
    kicker: { fontSize: 4 },
  }
  const sizeOptionD = {
    heading: { fontSize: 8 },
    paragraph: { fontSize: 1 },
    smallHeading: { fontSize: 5 },
    subHeading: { fontSize: 4 },
    kicker: { fontSize: 2 },
  }
  const option = randomItem([sizeOptionA, sizeOptionB, sizeOptionC, sizeOptionD]);
  merge(typography, option);
}