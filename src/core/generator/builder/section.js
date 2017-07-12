import blueprints from '../../../components/page/sections/_blueprints';
import { buildGroupFromSkeleton } from './group';
import { buildElementFromSkeleton } from './element';

import { mapValues, uniqueId } from 'lodash';
import { getElementsInItem, getGroupsInItem, linkChildren } from '../generator-utils';



export function buildSectionFromSkeleton(skeleton) {
  const section = {
    isSection: true,
    id: skeleton.id || ('section_' + uniqueId()),
    uid: 'suid_' + uniqueId(),
    name: skeleton.name,
    variant: skeleton.variant,
  }

  const blueprint = blueprints[skeleton.name];

  section.blueprint = blueprint;
  section.type = blueprint.type;
  section.groups = mapValues(blueprint.groups, (_, key) => (
    buildGroupFromSkeleton(skeleton.groups[key])
  ))
  section.elements = mapValues(blueprint.elements, (_, key) => (
    buildElementFromSkeleton(skeleton.elements[key])
  ))
  
  linkChildren(section);
  
  section._groups = getGroupsInItem(section);
  section._elements = getElementsInItem(section);
  
  section.section = section;
  section._groups.forEach(g => g.section = section);
  section._elements.forEach(e => e.section = section);
  
  

  return section;
}