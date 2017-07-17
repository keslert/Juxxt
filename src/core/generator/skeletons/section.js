import * as blueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from './group';
import { generateElementSkeleton } from './element';
import { getClosestVariant, generateItemSkeleton } from './utils';
import { randomItem, getCombinations } from '../../utils';
import { mapValues, map } from 'lodash';

export function generateSectionSkeleton(name, variant) {
  const blueprint = blueprints[name];
  return generateItemSkeleton(name, blueprint, variant);
}

export function generateAllSectionSkeletons(name, variant) {
  const blueprint = blueprints[name];

  const _variant = getClosestVariant(variant, blueprint.variants);
  const combinations = getCombinations(mapValues(blueprint.groups, group => group.options));

  const skeletons = map(combinations, groups => {
    const overrides = { groups: mapValues(groups, name => ({options: [name]})) }
    return generateItemSkeleton(name, blueprint, _variant, overrides)
  })

  return skeletons;
}