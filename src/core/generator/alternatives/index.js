import { 
  generateSectionComponentAlternatives,
  generateSectionLayoutAlternatives,
  generateSectionContentAlternatives,
  generateSectionBackgroundAlternatives,
  generateSectionStyleAlternatives,
  generateSectionImageAlternatives,
} from './section'
import { 
  generateGroupComponentAlternatives,
  generateGroupLayoutAlternatives,
  generateGroupContentAlternatives,
  generateGroupBackgroundAlternatives,
  generateGroupStyleAlternatives,
} from './group'
import { 
  generateElementComponentAlternatives,
  generateElementLayoutAlternatives,
  generateElementBackgroundAlternatives,
  generateElementTextAlternatives,
  generateElementImageAlternatives,
} from './element'

import {
  generatePageBrandColorAlternatives,
} from './page';
import { generateItemCloneAlternatives } from './alternatives-utils'
import { linkSkeleton, generatePageCSSRules } from '../generator-utils';
import { extractSkeletonFromItem } from '../skeletons/utils';

import { assignContent, getContentStore } from '../content';
import { assignStyles } from '../style';
import { assignColor } from '../color';

import { map, pick, filter } from 'lodash';

export function generateAlternatives(page, modify, selected) {
  let sections = [];

  if(modify.component) {
    sections = generateComponentAlternatives(page, modify.component, selected);
  } else if(modify.layout) {
    sections = generateLayoutAlternatives(page, modify.layout, selected);
  } else if(modify.background) {
    sections = generateBackgroundAlternatives(page, modify.background, selected);
  } else if(modify.text) {
    sections = generateTextAlternatives(page, modify.text, selected);
  } else if(modify.image) {
    sections = generateImageAlternatives(page, modify.image, selected);
  // } else if(modify.page) {
  //   const pages = generatePageAlternatives(page, modify.page);
  //   pages.forEach(generatePageCSSRules);
  //   return pages;
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
    skeletons = generateSectionComponentAlternatives(selected, modify, sectionSkeleton, page);
  } else if(selected.isGroup) {
    skeletons = generateGroupComponentAlternatives(selected, sectionSkeleton);
  } else {
    skeletons = generateElementComponentAlternatives(modify, selected, sectionSkeleton);
  }

  skeletons.forEach(skeleton => {
    assignColor(skeleton, page);
    assignContent(skeleton, getContentStore(selected.section._elements), page);
    assignStyles(skeleton, page);
  });

  return skeletons;
}


function generateLayoutAlternatives(page, modify, selected) {
  const section = selected.section;
  const sectionSkeleton = extractSkeletonFromItem(section);
  
  let skeletons;
  if(modify.clones) {
    skeletons = generateItemCloneAlternatives(selected.isClone ? selected.parent : selected, sectionSkeleton, page);
  } else if(selected.isSection) {
    skeletons = generateSectionLayoutAlternatives(modify, selected, sectionSkeleton);
  } else if(selected.isGroup) {
    skeletons = generateGroupLayoutAlternatives(modify, selected, sectionSkeleton);
  } else {
    skeletons = generateElementLayoutAlternatives(modify, selected, sectionSkeleton);
  }
  
  const sections = skeletons.map(skeleton => {
    linkSkeleton(skeleton);
    return skeleton;
  })

  return sections;
}

function generateBackgroundAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  
  let sections;
  if(selected.isSection) {
    sections = generateSectionBackgroundAlternatives(modify, skeleton, page);
  } else if(selected.isGroup) {
    sections = generateGroupBackgroundAlternatives(modify, selected, skeleton, page);
  } else {
    sections = generateElementBackgroundAlternatives(modify, selected, skeleton, page);
  }
  return sections;
}

function generateTextAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  
  let sections;
  if(selected.isSection) {
    sections = [];
  } else if(selected.isGroup) {
    sections = [];
  } else {
    sections = generateElementTextAlternatives(modify, selected, skeleton, page);
  }

  return sections;
}

function generateImageAlternatives(page, modify, selected) {
  const skeleton = extractSkeletonFromItem(selected.section);
  
  let sections;
  if(selected.isSection) {
    sections = generateSectionImageAlternatives(modify, skeleton, page);
  } else if(selected.isGroup) {
    sections = [];
  } else {
    sections = generateElementImageAlternatives(modify, selected, skeleton, page);
  }

  return sections;
}


function generatePageAlternatives(page, modify) {
  let pages;
  if(modify.brandColors) {
    pages = generatePageBrandColorAlternatives(page);
  }

  return pages;
}