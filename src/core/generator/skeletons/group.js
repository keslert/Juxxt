import blueprints from '../../../components/page/groups/_blueprints';
import { generateElementSkeleton } from './element';
import { getClosestVariant } from './utils';
import { mapValues } from 'lodash';

export function generateGroupSkeleton(name, variant) {
  const reqs = blueprints[name].requirements;

  return {
    name,
    variant: getClosestVariant(variant, reqs.variants),
    elements: mapValues(reqs.elements, element => (
      generateElementSkeleton(element.name)
    )),
  }
}