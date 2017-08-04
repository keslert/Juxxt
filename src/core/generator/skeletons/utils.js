import { 
  omit, 
  mapValues, 
  map, 
  includes, 
  forEach, 
  sortBy, 
  isEmpty, 
  pick, 
  isString,
  merge,
  mergeWith,
  get,
  keys,
  isArray, 
  cloneDeep,
  range,
  uniqueId,
} from 'lodash';
import { randomItem } from '../../utils';

import { generateGroupSkeleton } from './group';
import { generateElementSkeleton } from './element';
import sharedStyles from '../style/shared-styles';

import { getElementsInItem, getGroupsInItem, linkChildren, getParents } from '../generator-utils';

export function extractSkeletonFromItem(item) {
  const skeleton = {
    ...pick(item, ['id', 'is', 'type', 'relativeId', 'name', 'color', 'style', 
      'content', 'blueprint', 'isSection', 'isGroup', 'isElement', 'isClone', 
      'fullRelativeId', 'fullId', 'index',
    ]),
    groups: mapValues(item.groups, extractSkeletonFromItem),
    elements: mapValues(item.elements, extractSkeletonFromItem),
    clones: map(item.clones, extractSkeletonFromItem),
    uid: 'uid_' + uniqueId(),
  }
  
  return skeleton;
}

export function generateItemSkeleton(skeleton, blueprint) {
  const merged = mergeWith({}, blueprint, skeleton.blueprint, (o, s) => isArray(s) ? s : undefined);

  const _sharedStyles = map(merged.inherits, name => sharedStyles[name]);
  merged._allStyles = Object.assign({}, ..._sharedStyles, merged.style);
  merged.groups = pick(merged.groups, keys(blueprint.groups));
  merged.elements = pick(merged.elements, keys(blueprint.elements));
  
  const _skeleton = {
    content: {},
    color: {},
    ...skeleton,
    style: pick(skeleton.style, Object.keys(merged._allStyles)),
    elements: mapValues(merged.elements, (e, elementKey) => {
      const element = merge({}, e, get(skeleton, ['elements', elementKey]));
      return generateElementSkeleton(element);
    }),
    groups: mapValues(merged.groups, ({_default, options}, groupKey) => {
      const selected = _default || randomItem(options);
      const _selected = isString(selected) ? {name: selected} : selected
      const group = merge({}, _selected, get(skeleton, ['groups', groupKey]));
      return generateGroupSkeleton(group);
    }),
    blueprint: merged,
  }
  _skeleton.clones = generateCloneSkeletons(_skeleton);

  return _skeleton;
}

function generateCloneSkeletons(source) {
  if(source.clones) {
    return source.clones.map((clone, i) => generateCloneSkeleton(clone, source, i));
  }
  const numClones = get(source.blueprint, ['clones', '_default']) || 0;
  return range(0, numClones).map(i => generateCloneSkeleton({}, source, i));
}

function generateCloneSkeleton(clone, source, index) {
  const skeleton = merge({}, clone, source);
  skeleton.blueprint = {...skeleton.blueprint, clones: null};

  const _skeleton = cloneDeep(skeleton);
  _skeleton.clones = [];

  let _clone;
  if(skeleton.isGroup) {
    _clone = generateGroupSkeleton(_skeleton);
  } else {
    _clone = generateElementSkeleton(_skeleton);
  }
  _clone.relativeId = source.id + "_" + index;
  _clone.isClone = true;
  return _clone;
}

function getDefaults(_defaults={}, key) {
  return _defaults[key] || {};
}

export function getClosestLayout(layoutToMatch={}, layouts) {
  if(isEmpty(layouts)) {
    return {};
  }

  return mapValues(layouts, ({options, _default}, key) => {
    if(layoutToMatch[key] !== undefined && includes(options, layoutToMatch[key])) {
      return layoutToMatch[key];
    } else {
      return _default || randomItem(options);
    }
  })
}