import blueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from './group';
import { generateElementSkeleton } from './element';
import { getClosestVariant } from './utils';
import { randomItem, getCombinations } from '../../utils';
import { mapValues, map } from 'lodash';

export function generateSectionSkeleton(name, variant) {
  const blueprint = blueprints[name];

  return {
    name,
    variant: getClosestVariant(variant, blueprint.variants),
    groups: mapValues(blueprint.groups || {}, ({options}) => (
      generateGroupSkeleton(randomItem(options))
    )),
    elements: mapValues(blueprint.elements || {}, element => (
      generateElementSkeleton(element.name)
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
    groups: mapValues(groups, generateGroupSkeleton),
    elements: mapValues(blueprint.elements, e => generateElementSkeleton(e.name))
  }))

  return skeletons;
}