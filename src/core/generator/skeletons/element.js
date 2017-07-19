import * as blueprints from '../../../components/page/elements/_blueprints';
import { generateItemSkeleton } from  './utils';
import uniqueId from 'lodash/uniqueId';

export function generateElementSkeleton(blueprint) {
  const generic = blueprints[blueprint.name];
  const id = blueprint.id || 'e_' + uniqueId();
  const skeleton = { 
    id, 
    relativeId: id,
    isElement: true,
    is: generic.is,
  }
  
  return generateItemSkeleton(skeleton, blueprint, generic);
}