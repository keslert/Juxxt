import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { assignContent } from './content';
import { assignStyles } from './style';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { tintColor, getPrimary, getOkSectionColors, getOkBackgroundColors } from './color/utils';
import { randomItem } from '../utils';
import { range, reduce, uniqueId, forEach } from 'lodash';

export function init() {
  const palette = ["#374140","#1E1E20","#D9CB9E"];
  const primary = getPrimary(palette);
  const websiteColors = [...palette, tintColor("#211b1a",primary,20), tintColor('#f5f6f7', primary, 20), tintColor("#fff", primary, 2)];
  
  const backgroundBlueprint = getOkSectionColors(getOkBackgroundColors(websiteColors), websiteColors, [...palette, "#ffffff"]);
  
  const NUM_OF_SECTIONS = 6;

  const master = {
    id: 'p_' + uniqueId(),
    palette: palette,
    websiteColors: websiteColors,
    backgroundBlueprint: backgroundBlueprint,
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    isPage: true,
    sections: reduce(range(0, NUM_OF_SECTIONS), (sections, i) => {
      const page = {sections, backgroundBlueprint};
      let background;
      let section;
      if( i===1 ) {
        const skeletons = generateSectionComponentAlternatives({},["Basic","Basic1_2","Navbar2","Navbar1","Footer1","Footer2","FooterVerticalList"])
        section = buildSectionFromSkeleton(randomItem(skeletons));
        const background = getPrimary(Object.keys(page.backgroundBlueprint));
        section.color = { 
          background: background,
          text: page.backgroundBlueprint[background].text[0],
        };
      } else if( i===0 ) {
        const skeletons = generateSectionComponentAlternatives({},["Header","Basic","Basic1_2","Header1_2","Footer1","Footer2","FooterVerticalList"])

        section = buildSectionFromSkeleton(randomItem(skeletons))
        const background = '#ffffff';
        section.color = { 
          background: background,
          text: page.backgroundBlueprint[background].text[0],
        };

      } else if(i===(NUM_OF_SECTIONS-1)) {
        const skeletons = generateSectionComponentAlternatives({},["Header","Basic","Basic1_2","Header1_2","Basic","Basic1_2","Navbar1","Navbar2"])

        section = buildSectionFromSkeleton(randomItem(skeletons))
        const background = '#ffffff';
        section.color = { 
          background: background,
          text: page.backgroundBlueprint[background].text[0],
        }; 
      }
      else {
        const skeletons = generateSectionComponentAlternatives({}, ["Header", "Navbar1", "Navbar2","Header1_2","Footer1","Footer2","FooterVerticalList"]);
        const skeleton = randomItem(skeletons);
        section = buildSectionFromSkeleton(skeleton, page);
      }

      if(i === 1 || i === NUM_OF_SECTIONS - 1) {
        background = getPrimary(Object.keys(backgroundBlueprint));
      } else if((i % 2) === 1) {
        background = websiteColors[websiteColors.length - 2];
      } else {
        background = websiteColors[websiteColors.length - 1];
      }
      section.color = { background, text: backgroundBlueprint[background].text[0]}
      const page2 = {...page, sections: [...page.sections, section]}
      forEach(section.groups, group => colorGroup(group, page2.sections))
      forEach(section.elements, element => colorElement(element, page2));
      assignContent(section, []);
      assignStyles(section, page);
      return [...sections, section];
    }, [])
  }
  
  return { master, alternatives: [] };
}