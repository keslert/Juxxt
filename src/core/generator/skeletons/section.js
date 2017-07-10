import blueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from './group';
import { getClosestVariant } from './utils';
import { randomItem, getCombinations } from '../../utils';
import { mapValues, map } from 'lodash';

export function generateSectionSkeleton(name, variant) {
  const blueprint = blueprints[name];

  return {
    name,
    variant: getClosestVariant(variant, blueprint.variants),
    groups: mapValues(blueprint.groups, (reqs, key) => (
      generateGroupSkeleton(randomItem(reqs.options))
    )),
  }
}

export function generateAllSectionSkeletons(name, variant) {
  const blueprint = blueprints[name];

  const _variant = getClosestVariant(variant, blueprint.variants);
  const combinations = getCombinations(mapValues(blueprint.groups, group => group.options));

  const skeletons = map(combinations, groups => ({
    name,
    variant: _variant,
    groups: mapValues(groups, generateGroupSkeleton)
  }))

  return skeletons;
}