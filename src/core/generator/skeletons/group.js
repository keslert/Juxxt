import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateItemSkeleton } from './utils';
import uniqueId from 'lodash/uniqueId';

export function generateGroupSkeleton(skeleton) {
  const blueprint = blueprints[skeleton.name];
  
  const _skeleton = { 
    id: 'g_' + uniqueId(),
    ...skeleton,
    isGroup: true,
  }
  _skeleton.relativeId = _skeleton.id;

  return generateItemSkeleton(_skeleton, blueprint);
}