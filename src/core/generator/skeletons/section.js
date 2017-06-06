import blueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from './group';
import { getClosestVariant } from './utils';
import { randomItem } from '../../utils';
import { mapValues } from 'lodash';

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