import { buildGroupFromSkeleton } from './group';
import { buildElementFromSkeleton } from './element';
import { mapValues, range, cloneDeep, forEach } from 'lodash';
import { getParents } from '../generator-utils';

export function buildItemFromSkeleton(item, blueprint, skeleton) {
  const children = {
    elements: buildElementFromSkeleton,
    groups: buildGroupFromSkeleton,
  }

  forEach(children, (build, childType) => {
    item[childType] = mapValues(blueprint[childType], (_, name) => {
      const _skeleton = skeleton[childType][name];
      const item = build(_skeleton);
      item.clones = !_skeleton.clones ? [] : range(0, _skeleton.clones._default).map(i => cloneItem(item, i))
      return item;
    });
  })
}

function cloneItem(item, index) {
  const clone = cloneDeep(item);
  clone.source = item;
  clone.relativeId = clone.relativeId + '_' + index;
  return clone;
}

/*
// item.groups = mapValues(blueprint.groups || {}, (_, key) => 
//   buildGroupFromSkeleton(skeleton.groups[key])
// )
*/