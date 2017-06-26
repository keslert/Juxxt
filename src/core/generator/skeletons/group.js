import blueprints from '../../../components/page/groups/_blueprints';
import { generateElementSkeleton } from './element';
import { getClosestVariant } from './utils';
import { mapValues } from 'lodash';

export function generateGroupSkeleton(name, variant) {
  const blueprint = blueprints[name];
  return {
    name,
    variant: getClosestVariant(variant, blueprint.variants),
    elements: mapValues(blueprint.elements, element => (
      generateElementSkeleton(element.name)
    )),
  }
}