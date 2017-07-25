import { 
  generateSectionComponentAlternatives,
  generateSectionLayoutAlternatives,
  generateSectionContentAlternatives,
  generateSectionColorAlternatives,
  generateSectionStyleAlternatives,
  generateSectionCloneAlternatives,
} from './section'
import { 
  generateGroupComponentAlternatives,
  generateGroupLayoutAlternatives,
  generateGroupContentAlternatives,
  generateGroupColorAlternatives,
  generateGroupStyleAlternatives,
  generateGroupCloneAlternatives,
} from './group'
import { 
  generateElementComponentAlternatives,
  generateElementLayoutAlternatives,
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

import { map, pick, filter } from 'lodash';

export function generateAlternatives(page, modify, selected) {
  let sections = [];

  if(modify.component) {
    sections = generateComponentAlternatives(page, modify.component, selected);
  } else if(modify.layout) {
    sections = generateLayoutAlternatives(page, modify.layout, selected);
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


function generateLayoutAlternatives(page, modify, selected) {
  const section = selected.section;
  const sectionSkeleton = extractSkeletonFromItem(section);
  
  let skeletons;
  
  if(selected.isSection) {
    if(modify.clones) {
      skeletons = generateSectionCloneAlternatives(selected, sectionSkeleton);
    } else {
      skeletons = generateSectionLayoutAlternatives(modify, selected, sectionSkeleton);
    }
  } else if(selected.isGroup) {
    if(modify.clones) {
      skeletons = generateGroupCloneAlternatives(selected, sectionSkeleton);
    } else {
      skeletons = generateGroupLayoutAlternatives(modify, selected, sectionSkeleton);
    }
  } else {
    skeletons = generateElementLayoutAlternatives(modify, selected, sectionSkeleton);
  }
  
  const sections = skeletons.map(skeleton => {
    linkSkeleton(skeleton);
    skeleton.changes = pick(skeleton.layout, filter(Object.keys(modify), k => modify[k]));
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
  let pages;
  if(modify.brandColors) {
    pages = generatePageBrandColorAlternatives(page);
  }

  return pages;
}