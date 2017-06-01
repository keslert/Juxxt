import blueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from './group';
import { getClosestVariant } from './utils';
import { randomItem } from '../../utils';
import { mapValues } from 'lodash';

export function generateSectionSkeleton(name, variant) {
  const reqs = blueprints[name].requirements;

  return {
    name,
    variant: getClosestVariant(variant, reqs.variants),
    groups: mapValues(reqs.groups, (groupReqs, key) => (
      generateGroupSkeleton(randomItem(groupReqs.options))
    )),
  }
}