import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { extractSkeletonFromSection } from './skeletons/utils';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { tintColor, getSortedByPrimary, getOkSectionColors, getOkBackgroundColors, sortByLuminance } from './color/utils';
import { randomItem } from '../utils';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, fromPairs, toPairs, max, some, filter } from 'lodash';


export function init() {
  //const palette = ["#DC3522", "#374140"];
  //const palette = ["#48F6F9","#052F54","#ffcc00","#910000"]
  const palette = ["#374140","#1E1E20","#D9CB9E"];
  //const palette = ["#5AFF15","#AAFFE5","#9D75CB","#A657AE", "#8C1A6A"];
  //const palette = ['#EA9F3B', "#BBBE64", "#93A8AC", "#8E5572", "#443850"];
  const primary = getSortedByPrimary(palette)[Object.keys(getSortedByPrimary(palette))[0]];
  const websiteColors = sortByLuminance([...palette, tintColor("#211b1a",primary,20), tintColor('#f5f6f7', primary, 20), tintColor("#fff", primary, 2)]);
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
        const skeletons = generateSectionComponentAlternatives({},{header: true})
        section = buildSectionFromSkeleton(randomItem(skeletons));
        const background = getSortedByPrimary(palette)[Object.keys(getSortedByPrimary(Object.keys(backgroundBlueprint)))[0]]
        section.color = { 
          background: background,
          text: page.backgroundBlueprint[background].text[0],
        };
      } else if( i===0 ) {
        const skeletons = generateSectionComponentAlternatives({},{navigation: true})

        section = buildSectionFromSkeleton(randomItem(skeletons))
        const background = '#ffffff';
        section.color = { 
          background: background,
          text: page.backgroundBlueprint[background].text[0],
        };

      } else if(i===(NUM_OF_SECTIONS-1)) {
        const skeletons = generateSectionComponentAlternatives({},{footer: true})

        section = buildSectionFromSkeleton(randomItem(skeletons))
        const background = '#ffffff';
        section.color = { 
          background: background,
          text: page.backgroundBlueprint[background].text[0],
        }; 
      }
      else {
        const skeletons = generateSectionComponentAlternatives({},{basic: true});
        const skeleton = randomItem(skeletons);
        section = buildSectionFromSkeleton(skeleton, page);
      }

      if(i === 1 || i === NUM_OF_SECTIONS - 1) {

        background = getSortedByPrimary(palette)[Object.keys(getSortedByPrimary(Object.keys(backgroundBlueprint)))[0]];
      } else if((i % 2) === 1) {
        background = websiteColors[websiteColors.length - 2];
      } else {
        background = websiteColors[websiteColors.length - 1];
      }
      section.color = { background, text: backgroundBlueprint[background].text[0]};
      const page2 = {...page, sections: [...page.sections, section]};
      forEach(section.groups, group => colorGroup(group, page2.sections));
      forEach(section.elements, element => colorElement(element, page2));
      assignContent(section, []);
      assignStyles(section, page);
      return [...sections, section];
    }, [])
  }
  return { master, alternatives: [] };
}

export function overrideElementContent(element, content, page) {
  const store = element.group.section.contentStore.map(item => 
    item.elementId !== element.id ? item : {...item, ...content}
  );

  const skeleton = extractSkeletonFromSection(element.group.section);
  const section = buildSectionFromSkeleton(skeleton);
  assignContent(section, store);
  assignStyles(section, page);
  assignColor(section, page);

  return section;
}