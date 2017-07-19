import { generateSectionComponentAlternatives } from './alternatives/section';
import { generateSectionSkeleton } from './skeletons/section'
import { extractSkeletonFromItem } from './skeletons/utils';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { buildPageColorBlueprint } from './color/page';
import { randomItem, replaceWhiteSpace } from '../utils';

import { getSection, getParents, linkSkeleton } from './generator-utils';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, max, some, filter, cloneDeep, find } from 'lodash';
import defaultTheme from './themes';

const NUM_SECTIONS = 2;
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
    isPage: true,
    isMaster: true,
    sections: reduce(defaultTheme.page.sections, (sections, blueprint) => {
      const page = {sections, colorBlueprint};
      
      const skeleton = generateSectionSkeleton(blueprint);
      linkSkeleton(skeleton);
      
      skeleton.color.background = skeleton.color.background || '#ffffff';
      
      const page2 = {...page, sections: [...page.sections, skeleton]};
      forEach(skeleton._groups, group => colorGroup(group, page2.sections));
      forEach(skeleton._elements, element => colorElement(element, page2));

      assignContent(skeleton, []);
      assignStyles(skeleton, page);
      return [...sections, skeleton];
    }, [])
  }

  master.sections.forEach(section => { section.master = true });
  generatePageCSSRules(master);

  return { master, alternatives: [] };
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

export function generatePageCSSRules(page) {
  
  const rules = [];

  page.colorBlueprint.texts.forEach(color => {
    rules.push(`.c-${color.substr(1)} { color: ${color}; }`);
  });

  page.colorBlueprint.backgrounds.forEach(color => {
    rules.push(`.bg-${color.substr(1)} { background: ${color}; }`);
    rules.push(`.b-${color.substr(1)} { border-color: ${color}; }`);
  });
  
  // Gradients
  forEach(page.colorBlueprint.bgBlueprints, blueprint => {
    blueprint.gradients.forEach(({start, end, direction}) => {
      const key = `.grd-${start.substr(1)}-${end.substr(1)}-${replaceWhiteSpace(direction, '')}`;
      rules.push(`${key} { background: linear-gradient(${direction}, ${start}, ${end}); }`);
    })
  })

  page.sections.forEach(section => {
    if(section.color.pattern) {
      rules.push(`.ptrn-${section.color.pattern} { background: ${section.color._pattern}; background-size: 75%; }`);
    }

    if(section.color.backgroundImage) {
      rules.push(`
        .bgimg-${section.color.backgroundImage} {
          background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${section.color._backgroundImage}) !important;
          background-size: cover !important;
          background-position: center center !important;
        }
      `);
    }
  })

  page.CSSRules = rules.join('\n');
}

//background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/openSourceImages2017/${section.color.backgroundImage}.jpg) !important;