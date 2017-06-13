import { 
  generateSectionComponentAlternatives,
  generateSectionVariantAlternatives,
  generateSectionContentAlternatives,
  generateSectionColorAlternatives,
} from './section'
import { 
  generateGroupComponentAlternatives,
  generateGroupVariantAlternatives,
  generateGroupContentAlternatives,
  generateGroupColorAlternatives,
} from './group'
import { 
  generateElementComponentAlternatives,
  generateElementVariantAlternatives,
  generateElementContentAlternatives,
  generateElementColorAlternatives,
} from './element'

import { buildSectionFromSkeleton } from '../builder/section';
import { extractSkeletonFromSection } from '../skeletons/utils';

import { assignContent } from '../content';
import { assignStyles } from '../style';
import { assignColor } from '../color';

/* Returns page skeletons */
export function generateAlternatives(page, modify, selected) {
  const _selected = selected[0];

  let sections = [];
  if(modify.component) {
    sections = generateComponentAlternatives(page, _selected);
  } else if(modify.variant) {
    sections = generateVariantAlternatives(page, _selected);
  } else if(modify.color) {
    sections = generateColorAlternatives(page, _selected);
  } else if(modify.content) {
    sections = generateContentAlternatives(page, _selected);
  } else if(modify.style) {

  }

  return sections.map(section => ({
    ...page,
    sections: [section],
  }))
}

function generateComponentAlternatives(page, selected) {
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
    return _section;
  })

  return sections;
}

function generateColorAlternatives(page, selected) {
  const section = getSectionFromItem(selected)
  const skeleton = extractSkeletonFromSection(section);
  const _section = buildSectionFromSkeleton(skeleton);
  assignContent(_section, section.contentStore);
  assignStyles(_section);

  let sections;
  if(selected.isSection) {
    sections = generateSectionColorAlternatives(_section);
  } else if(selected.isGroup) {
    sections = generateGroupColorAlternatives(_section);
  } else {
    sections = generateElementColorAlternatives(_section);
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



function getSectionFromItem(item) {
  if(item.isSection) {
    return item;
  } else if(item.isGroup) {
    return item.section;
  }
  return item.group.section;
}