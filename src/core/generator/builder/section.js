import * as blueprints from '../../../components/page/sections/_blueprints';

import { buildItemFromSkeleton } from './builder-utils';

import { mapValues, uniqueId } from 'lodash';
import { getElementsInItem, getGroupsInItem, linkChildren, getParents } from '../generator-utils';



export function buildSectionFromSkeleton(skeleton) {
  const section = {
    isSection: true,
    id: skeleton.id || ('s_' + uniqueId()),
    uid: 'suid_' + uniqueId(),
    name: skeleton.name,
    variant: skeleton.variant,
  }
  section.fullId = section.id;
  section.relativeId = section.id;

  const blueprint = blueprints[skeleton.name];

  section.type = blueprint.type;
  
  buildItemFromSkeleton(section, blueprint, skeleton);
  
  
  linkChildren(section);
  
  section._groups = getGroupsInItem(section);
  section._elements = getElementsInItem(section);

  assignUniqueIds(section._groups);
  assignUniqueIds(section._elements);
  
  section.section = section;
  section._groups.forEach(g => g.section = section);
  section._elements.forEach(e => e.section = section);
  return section;
}

function assignUniqueIds(items) {
  items.forEach(item => {
    const parents = getParents(item);
    item.fullId = parents.map(p => p.id).join('_') + item.id;
    item.fullRelativeId = parents.map(p => p.relativeId).join('_') + item.relativeId;
  });
}