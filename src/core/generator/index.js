import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { generateSectionSkeleton } from './skeletons/section'
import { extractSkeletonFromItem } from './skeletons/utils';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { buildPageColorBlueprint } from './color/page';
import { randomItem, replaceWhiteSpace } from '../utils';

import { getSection, getParents } from './generator-utils';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, max, some, filter, cloneDeep } from 'lodash';
import defaultTheme from './themes';

const NUM_SECTIONS = 9;
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
    sections: reduce(range(0, NUM_SECTIONS), (sections, i) => {
      const page = {sections, colorBlueprint};

      const sectionType = {
        navigation: i === 0,
        header: i === 1,
        footer: i === NUM_SECTIONS - 1,
        action: i === NUM_SECTIONS - 2, 
        grid: i === NUM_SECTIONS - 3,
        basic: i > 1 && i < NUM_SECTIONS - 3,
      };

      const sectionName = i === 1 ? 'Header' : undefined;

      const backgrounds = {
        navigation: colorBlueprint.lights,
        header: [colorBlueprint.primary],
        footer: colorBlueprint.lights,
        action: [colorBlueprint.primary],
        grid: colorBlueprint.lights,
        basic: colorBlueprint.lights,
      };

      let skeletons;
      if(sectionName) {
        skeletons = [generateSectionSkeleton(sectionName)];
      } else {
        skeletons = generateSectionComponentAlternatives({}, sectionType, sectionName);
      }

      const section = buildSectionFromSkeleton(randomItem(skeletons));
      const background = backgrounds[section.type][i % backgrounds[section.type].length];

      section.color = {
        background,
        text: colorBlueprint.bgBlueprints[background].texts[0],
      }

      const page2 = {...page, sections: [...page.sections, section]};
      forEach(section._groups, group => colorGroup(group, page2.sections));
      forEach(section._elements, element => colorElement(element, page2));
      assignContent(section, []);
      assignStyles(section, page);
      return [...sections, section];
    }, [])
  }

  master.sections.forEach(section => { section.master = true });
  generatePageCSSRules(master);

  return { master, alternatives: [] };
}

export function overrideElementContent(element, content, page) {
  const store = element.section.contentStore.map(item => 
    item.elementId !== element.fullRelativeId ? item : {...item, ...content}
  );

  const skeleton = extractSkeletonFromItem(element.section);
  const section = buildSectionFromSkeleton(skeleton);
  assignContent(section, store);
  assignStyles(section, page);
  assignColor(section, page);

  return section;
}

export function duplicateSection(section, page) {
  const _section = cloneDeep(section);


  const skeleton = extractSkeletonFromItem(section);
  skeleton.id = 's_' + uniqueId();
  const duplicated = buildSectionFromSkeleton(skeleton);

  _section.id = duplicated.id;
  _section.fullId = duplicated.fullId;
  _section.fullRelativeId = duplicated.fullRelativeId;
  ['_elements', '_groups'].forEach(key => _section[key].forEach((item, i) => {
    item.id = duplicated[key][i].id;
    item.fullId = duplicated[key][i].fullId;
    item.fullRelativeId = duplicated[key][i].fullRelativeId;
  }))

  const store = _section._elements.map(e => ({
    ...e.content,
    elementId: e.fullRelativeId,
    elementName: e.name,
    elementIs: e.is,
    parentIds: map(getParents(e), 'fullId'),
  }));

  const _page = {...page, sections: [_section]};

  assignContent(duplicated, store);
  assignStyles(duplicated, _page);
  assignColor(duplicated, _page);

  return duplicated;
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