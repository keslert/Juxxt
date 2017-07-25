import * as blueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from './group';
import { generateElementSkeleton } from './element';
import { getClosestLayout, generateItemSkeleton } from './utils';
import { randomItem, getCombinations } from '../../utils';
import { mapValues, map, uniqueId } from 'lodash';

export function generateSectionSkeleton(blueprint) {
  const generic = blueprints[blueprint.name];
  
  const id = blueprint.id || 's_' + uniqueId()
  const skeleton = { 
    id, 
    relativeId: id,
    isSection: true,
    type: generic.type,
  }

  return generateItemSkeleton(skeleton, blueprint, generic);
}

export function generateAllSectionSkeletons(blueprint) {
  const generic = blueprints[blueprint.name];

  const layout = getClosestLayout(blueprint.layout, generic.layouts);
  const combinations = getCombinations(mapValues(generic.groups, group => group.options));

  const skeletons = map(combinations, groups => {
    return generateSectionSkeleton({
      ...blueprint,
      groups: mapValues(groups, name => ({_default: name}))
    })
  })

  return skeletons;
}