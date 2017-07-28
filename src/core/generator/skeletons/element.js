import * as blueprints from '../../../components/page/elements/_blueprints';
import { generateItemSkeleton } from  './utils';
import uniqueId from 'lodash/uniqueId';

export function generateElementSkeleton(skeleton) {
  const blueprint = blueprints[skeleton.name];
  const _skeleton = { 
    id: 'e_' + uniqueId(),
    ...skeleton,
    isElement: true,
    is: blueprint.is,
  }
  _skeleton.relativeId = _skeleton.id;
  
  return generateItemSkeleton(_skeleton, blueprint);
}