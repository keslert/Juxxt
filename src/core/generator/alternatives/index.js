import { 
  generateSectionComponentAlternatives,
  generateSectionVariantAlternatives,
  generateSectionContentAlternatives,
  generateSectionColorAlternatives,
  generateSectionStyleAlternatives,
} from './section'
import { 
  generateGroupComponentAlternatives,
  generateGroupVariantAlternatives,
  generateGroupContentAlternatives,
  generateGroupColorAlternatives,
  generateGroupStyleAlternatives,
} from './group'
import { 
  generateElementComponentAlternatives,
  generateElementVariantAlternatives,
  generateElementContentAlternatives,
  generateElementColorAlternatives,
  generateElementStyleAlternatives,
} from './element'

import {
  generatePageBrandColorAlternatives,
} from './page';

import { buildSectionFromSkeleton } from '../builder/section';
import { extractSkeletonFromSection } from '../skeletons/utils';

import { generatePageCSSRules } from '../index';

import { assignContent } from '../content';
import { assignStyles } from '../style';
import { assignColor } from '../color';

import { map } from 'lodash';

export function generateAlternatives(page, modify, selected) {
  let sections = [];
  if(modify.component) {
    sections = generateComponentAlternatives(page, modify.component, selected);
  } else if(modify.variant) {
    sections = generateVariantAlternatives(page, selected);
  } else if(modify.color) {
    sections = generateColorAlternatives(page, modify.color, selected);
  } else if(modify.content) {
    sections = generateContentAlternatives(page, selected);
  } else if(modify.style) {
    sections = generateStyleAlternatives(page, modify.style, selected);
  } else if(modify.page) {
    const pages = generatePageAlternatives(page, modify.page);
    pages.forEach(generatePageCSSRules);
    return pages;
  }


  const pages = sections.map(section => {
    const _page = {...page, sections: [section]};
    _page.isMaster = false;
    generatePageCSSRules(_page);
    return _page;
  })

  return pages;
}

function generateComponentAlternatives(page, modify, selected) {
  const section = getSectionFromItem(selected)
  const masterSkeleton = extractSkeletonFromSection(section);

  let skeletons;
  if(selected.isSection) {
    skeletons = generateSectionComponentAlternatives(selected, modify, masterSkeleton);
  } else if(selected.isGroup) {
    skeletons = generateGroupComponentAlternatives(selected, masterSkeleton);
  } else {
    skeletons = generateElementComponentAlternatives(selected, masterSkeleton);
  }

  const sections = skeletons.map(skeleton => {
    const _section = buildSectionFromSkeleton(skeleton)
    assignColor(_section, page);
    assignContent(_section, section.contentStore);
    assignStyles(_section, page);
    return _section;
  })
  return sections;
}


function generateVariantAlternatives(page, selected) {
  const section = getSectionFromItem(selected);
  const masterSkeleton = extractSkeletonFromSection(section);
  
  let skeletons;
  if(selected.isSection) {
    skeletons = generateSectionVariantAlternatives(selected, masterSkeleton);
  } else if(selected.isGroup) {
    skeletons = generateGroupVariantAlternatives(selected, masterSkeleton);
  } else {
    skeletons = generateElementVariantAlternatives(selected, masterSkeleton);
  }
  
  const sections = skeletons.map(skeleton => {
    const _section = buildSectionFromSkeleton(skeleton)
    assignColor(_section, page);
    assignContent(_section, section.contentStore);
    assignStyles(_section, page);

    
    if(selected.isSection) {
      _section.changes = Object.assign({}, _section.variant, ...map(_section.groups, group => group.variant));
    } else if(selected.isGroup) {
      _section.changes = _section.groups[selected.sectionKey].variant;
    } else {
      _section.changes = _section.groups[selected.group.sectionKey].variant;
    } 

    return _section;
  })

  return sections;
}

function generateColorAlternatives(page, modify, selected) {
  const section = getSectionFromItem(selected)
  const skeleton = extractSkeletonFromSection(section);
  const _section = buildSectionFromSkeleton(skeleton);
  assignContent(_section, section.contentStore);
  assignStyles(_section,page);
  assignColor(_section,page);
  let sections;
  if(selected.isSection) {
    sections = generateSectionColorAlternatives(_section, modify, page);
  } else if(selected.isGroup) {
    if(selected == null)
      debugger
    sections = generateGroupColorAlternatives(_section, modify, page, selected);
  } else {
    sections = generateElementColorAlternatives(_section, modify, selected, page);
  }

  return sections;
}

function generateContentAlternatives(page, selected) {
  const section = getSectionFromItem(selected);
  const skeleton = extractSkeletonFromSection(section);
  const _section = buildSectionFromSkeleton(skeleton);
  assignColor(_section, page);
  assignStyles(_section, page);

  let sections;
  if(selected.isSection) {
    sections = generateSectionContentAlternatives(_section, section.contentStore);
  } else if(selected.isGroup) {
    sections = generateGroupContentAlternatives(_section, selected, section.contentStore);
  } else if(selected.isElement) {
    sections = generateElementContentAlternatives(_section, selected, section.contentStore);
  }

  return sections;
}

function generateStyleAlternatives(page, modify, selected) {
  const section = getSectionFromItem(selected);
  const skeleton = extractSkeletonFromSection(section);
  const _section = buildSectionFromSkeleton(skeleton);
  assignColor(_section, page);
  assignContent(_section, section.contentStore);
  assignStyles(_section, page);
  let sections;
  if(selected.isSection) {
    sections = generateSectionStyleAlternatives(modify, _section, page);
  } else if(selected.isGroup) {
    sections = generateGroupStyleAlternatives(modify, _section, selected);
  } else if(selected.isElement) {
    sections = generateElementStyleAlternatives(modify, _section, selected);
  }

  return sections;
}

function generatePageAlternatives(page, modify) {
  let _page;
  if(modify.brandColors) {
    _page = generatePageBrandColorAlternatives(page);
  }

  return _page;
}

function getSectionFromItem(item) {
  if(item.isSection) {
    return item;
  } else if(item.isGroup) {
    return item.section;
  }
  return item.group.section;
}