import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateElementSkeleton } from './element';
import { generateItemSkeleton } from './utils';
import uniqueId from 'lodash/uniqueId';
import { randomItem } from '../../utils';

export function generateGroupSkeleton(blueprint) {
  const generic = blueprints[blueprint.name];
  
  const id = blueprint.id || 'g_' + uniqueId()
  const skeleton = { 
    id, 
    relativeId: id,
    isGroup: true,
  }

  return generateItemSkeleton(skeleton, blueprint, generic);
}