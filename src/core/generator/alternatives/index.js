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

import { linkSkeleton, generatePageCSSRules } from '../generator-utils';
import { extractSkeletonFromItem } from '../skeletons/utils';

import { assignContent, getContentStore } from '../content';
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

  skeletons.forEach(skeleton => {
    assignColor(skeleton, page);
    assignContent(skeleton, getContentStore(selected.section._elements));
    assignStyles(skeleton, page);
  });

  return skeletons;
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
    linkSkeleton(skeleton);
    skeleton.changes = Object.assign({}, skeleton.variant, ...map(skeleton.groups, 'variant'));
    return skeleton;
  })

  return sections;
}

function generateColorAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  
  let sections;
  if(selected.isSection) {
    sections = generateSectionColorAlternatives(skeleton, modify, page);
  } else if(selected.isGroup) {
    sections = generateGroupColorAlternatives(skeleton, modify, page, selected);
  } else {
    sections = generateElementColorAlternatives(skeleton, modify, selected, page);
  }

  return sections;
}

function generateContentAlternatives(page, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);

  let sections;
  if(selected.isSection) {
    sections = generateSectionContentAlternatives(skeleton);
  } else if(selected.isGroup) {
    sections = generateGroupContentAlternatives(skeleton, selected);
  } else if(selected.isElement) {
    sections = generateElementContentAlternatives(skeleton, selected);
  }
  return sections;
}

function generateStyleAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);

  let sections;
  if(selected.isSection) {
    sections = generateSectionStyleAlternatives(modify, skeleton);
  } else if(selected.isGroup) {
    sections = generateGroupStyleAlternatives(modify, skeleton, selected);
  } else if(selected.isElement) {
    sections = generateElementStyleAlternatives(modify, skeleton, selected);
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