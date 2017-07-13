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
import { extractSkeletonFromItem } from '../skeletons/utils';

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
  const sectionSkeleton = extractSkeletonFromItem(selected.section);

  let skeletons;
  if(selected.isSection) {
    skeletons = generateSectionComponentAlternatives(selected, modify, sectionSkeleton);
  } else if(selected.isGroup) {
    skeletons = generateGroupComponentAlternatives(selected, sectionSkeleton);
  } else {
    skeletons = generateElementComponentAlternatives(selected, sectionSkeleton);
  }

  const sections = skeletons.map(skeleton => {
    const section = buildSectionFromSkeleton(skeleton)
    assignColor(section, page);
    assignContent(section, selected.section.contentStore);
    assignStyles(section, page);
    return section;
  });

  return sections;
}


function generateVariantAlternatives(page, selected) {
  const section = selected.section;
  const sectionSkeleton = extractSkeletonFromItem(section);
  
  let skeletons;
  if(selected.isSection) {
    skeletons = generateSectionVariantAlternatives(selected, sectionSkeleton);
  } else if(selected.isGroup) {
    skeletons = generateGroupVariantAlternatives(selected, sectionSkeleton);
  } else {
    skeletons = generateElementVariantAlternatives(selected, sectionSkeleton);
  }
  
  const sections = skeletons.map(skeleton => {
    const _section = buildSectionFromSkeleton(skeleton)
    assignColor(_section, page);
    assignContent(_section, section.contentStore);
    assignStyles(_section, page);
    _section.changes = _section.variant;
    
    return _section;
  })

  return sections;
}

function generateColorAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  const section = buildSectionFromSkeleton(skeleton);
  assignContent(section, selected.section.contentStore);
  assignStyles(section, page);
  assignColor(section, page);
  
  let sections;
  if(selected.isSection) {
    sections = generateSectionColorAlternatives(section, modify, page);
  } else if(selected.isGroup) {
    sections = generateGroupColorAlternatives(section, modify, page, selected);
  } else {
    sections = generateElementColorAlternatives(section, modify, selected, page);
  }

  return sections;
}

function generateContentAlternatives(page, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  const section = buildSectionFromSkeleton(skeleton);
  assignColor(section, page);
  assignStyles(section, page);

  let sections;
  if(selected.isSection) {
    sections = generateSectionContentAlternatives(section, selected.section.contentStore);
  } else if(selected.isGroup) {
    sections = generateGroupContentAlternatives(section, selected, selected.section.contentStore);
  } else if(selected.isElement) {
    sections = generateElementContentAlternatives(section, selected, selected.section.contentStore);
  }

  return sections;
}

function generateStyleAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  const section = buildSectionFromSkeleton(skeleton);
  assignColor(section, page);
  assignContent(section, selected.section.contentStore);
  assignStyles(section, page);
  let sections;
  if(selected.isSection) {
    sections = generateSectionStyleAlternatives(modify, section, page);
  } else if(selected.isGroup) {
    sections = generateGroupStyleAlternatives(modify, section, selected);
  } else if(selected.isElement) {
    sections = generateElementStyleAlternatives(modify, section, selected);
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