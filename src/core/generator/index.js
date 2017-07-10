import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { extractSkeletonFromSection } from './skeletons/utils';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { buildPageColorBlueprint } from './color/page';
import { randomItem } from '../utils';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, fromPairs, toPairs, max, some, filter } from 'lodash';

const NUM_SECTIONS = 6;
export function init() {
  // const palette = ["#dc5131", "#374140"];
  // const palette = ["#48F6F9","#052F54","#ffcc00","#910000"]
  // const palette = ["#374140","#1E1E20","#D9CB9E"];
  // const palette = ["#5AFF15","#AAFFE5","#9D75CB","#A657AE", "#8C1A6A"];
  const palette = ['#EA9F3B', "#BBBE64", "#93A8AC", "#8E5572", "#443850"];
  const colorBlueprint = buildPageColorBlueprint(palette);

  const master = {
    id: 'p_' + uniqueId(),
    palette,
    colorBlueprint,
    style: {
      fontFamily: 'Source Sans Pro',
      fontSize: '16px',
    },
    isPage: true,
    sections: reduce(range(0, NUM_SECTIONS), (sections, i) => {
      const page = {sections, colorBlueprint};

      const sectionType = {
        navigation: i === 0,
        header: i === 1,
        footer: i === NUM_SECTIONS - 1,
        action: i === NUM_SECTIONS - 2, 
        basic: i > 1 && i < NUM_SECTIONS - 2,
      };

      const backgrounds = {
        navigation: colorBlueprint.lights,
        header: [colorBlueprint.primary],
        footer: colorBlueprint.lights,
        action: [colorBlueprint.primary],
        basic: colorBlueprint.lights,
      };

      const skeletons = generateSectionComponentAlternatives({}, sectionType);
      const section = buildSectionFromSkeleton(randomItem(skeletons));
      const background = backgrounds[section.type][i % backgrounds[section.type].length];

      section.color = {
        background,
        text: colorBlueprint.bgBlueprints[background].texts[0],
      }

      const page2 = {...page, sections: [...page.sections, section]};
      forEach(section.groups, group => colorGroup(group, page2.sections));
      forEach(section.elements, element => colorElement(element, page2));
      assignContent(section, []);
      assignStyles(section, page);
      return [...sections, section];
    }, [])
  }

  master.sections.forEach(section => { section.master = true });

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