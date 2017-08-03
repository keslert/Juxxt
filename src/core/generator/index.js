import { generateSectionComponentAlternatives } from './alternatives/section';
import { generateSectionSkeleton } from './skeletons/section'
import { extractSkeletonFromItem } from './skeletons/utils';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { buildPageColorBlueprint } from './color/page';

import { getSection, getParents, linkSkeleton, generatePageCSSRules } from './generator-utils';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, max, some, filter, cloneDeep, find } from 'lodash';
import defaultTheme from './themes';

const NUM_SECTIONS = 7;
export function init() {
  const colorBlueprint = buildPageColorBlueprint(defaultTheme.palette);

  const master = {
    id: 'p_' + uniqueId(),
    palette: defaultTheme.palette,
    colorBlueprint,
    style: {
      fontFamily: 'Source Sans Pro',
      fontSize: '16px',
    },
    maxWidth: 1024,
    isPage: true,
    isMaster: true,
    sections: reduce(defaultTheme.page.sections, (sections, blueprint) => {
      const page = {sections, colorBlueprint};

      const skeleton = generateSectionSkeleton(blueprint);
      linkSkeleton(skeleton);
      
      skeleton.color.background = skeleton.color.background || '#ffffff';
      
      const page2 = {...page, sections: [...page.sections, skeleton]};
      forEach(skeleton._groups, group => colorGroup(group, page2));
      forEach(skeleton._elements, element => colorElement(element, page2));

      assignContent(skeleton, []);
      assignStyles(skeleton, page);
      return [...sections, skeleton];
    }, [])
  }

  master.sections.forEach(section => { section.master = true });
  generatePageCSSRules(master);

  return master;
}

export function overrideElementContent(element, content, page) {
  const skeleton = extractSkeletonFromItem(element.section);
  linkSkeleton(skeleton);
  const _element = find(skeleton._elements, e => e.fullRelativeId === element.fullRelativeId);
  _element.content = content;

  return skeleton;
}

export function duplicateSection(section) {
  const skeleton = extractSkeletonFromItem(section);
  skeleton.id = 's_' + uniqueId();
  skeleton.relativeId = skeleton.id;
  linkSkeleton(skeleton);
  return skeleton;
}