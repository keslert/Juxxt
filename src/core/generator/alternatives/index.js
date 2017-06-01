import { 
  generateSectionComponentAlternatives 
} from './section'
import { 
  generateGroupComponentAlternatives 
} from './group'
import { 
  generateElementComponentAlternatives 
} from './element'

import { buildSectionFromSkeleton } from '../builder/section';

import { extractSkeletonFromSection } from '../skeletons/utils';
import { mapValues } from 'lodash';

/* Returns page skeletons */
export function generateAlternatives(page, modify, selected) {
  let skeletons = [];
  if(modify.component) {
    skeletons = generateComponentAlternatives(page, selected);
  }

  const sections = skeletons.map(s => buildSectionFromSkeleton(s));
  return sections;
}

export function generateComponentAlternatives(page, selected) {
  const section = getSectionFromItem(selected)
  const masterSkeleton = extractSkeletonFromSection(section);
  
  let skeletons;
  if(selected.isSection) {
    skeletons = generateSectionComponentAlternatives(selected, masterSkeleton);
  } else if(selected.isGroup) {
    skeletons = generateGroupComponentAlternatives(selected, masterSkeleton);
  } else {
    skeletons = generateElementComponentAlternatives(selected, masterSkeleton);
  }

  return skeletons;
}

function getSectionFromItem(item) {
  if(item.isSection) {
    return item;
  } else if(item.isGroup) {
    return item.section;
  }
  return item.group.section;
}