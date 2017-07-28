import * as blueprints from '../../../components/page/sections/_blueprints';

import { generateItemSkeleton } from './utils';
import { getCombinations } from '../../utils';
import { mapValues, map, uniqueId } from 'lodash';

export function generateSectionSkeleton(skeleton) {
  const blueprint = blueprints[skeleton.name];
  
  const _skeleton = { 
    id: 's_' + uniqueId(),
    ...skeleton,
    isSection: true,
    type: blueprint.type,
  }
  _skeleton.relativeId = _skeleton.id;

  return generateItemSkeleton(_skeleton, blueprint);
}

export function generateAllSectionSkeletons(blueprint) {
  const generic = blueprints[blueprint.name];

  const combinations = getCombinations(mapValues(generic.groups, group => group.options));

  const skeletons = map(combinations, groups => {
    return generateSectionSkeleton({
      ...blueprint,
      groups: mapValues(groups, name => ({_default: name}))
    })
  })

  return skeletons;
}