import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { buildGroupFromSkeleton } from './group';
import shortid from 'shortid';

import { mapValues } from 'lodash';
import { getElementsFromSection } from './utils';



export function buildSectionFromSkeleton(skeleton) {
  const section = {
    isSection: true,
    id: skeleton.id || shortid.generate(),
    name: skeleton.name,
    variant: skeleton.variant,
  }

  const blueprint = getSectionBlueprint(skeleton.name);

  section.groups = mapValues(blueprint.groups, (groupReqs, key) => {
    const group = buildGroupFromSkeleton(skeleton.groups[key])
    group.section = section;
    group.sectionKey = key;
    return group;
  })

  section.elements = getElementsFromSection(section);
  return section;
}

export function getSectionBlueprint(name) {
  return sectionBlueprints[name];
}