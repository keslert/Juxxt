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
  mergeWith, 
  isArray, 
  cloneDeep,
  range,
  uniqueId,
} from 'lodash';
import { randomItem } from '../../utils';

import { generateGroupSkeleton } from './group';
import { generateElementSkeleton } from './element';

import { getElementsInItem, getGroupsInItem, linkChildren, getParents } from '../generator-utils';

export function extractSkeletonFromItem(item) {
  const skeleton = {
    ...pick(item, ['id', 'is', 'type', 'relativeId', 'name', 'variant', 'color', 'style', 
      'content', 'blueprint', 'isSection', 'isGroup', 'isElement', 'isClone', 
      'fullRelativeId', 'fullId', 'index', '_possibleStyles',
    ]),
    groups: mapValues(item.groups, extractSkeletonFromItem),
    elements: mapValues(item.elements, extractSkeletonFromItem),
    clones: map(item.clones, extractSkeletonFromItem),
    uid: 'uid_' + uniqueId(),
  }
  
  return skeleton;
}

export function generateItemSkeleton(skeleton, blueprint, generic) {
  
  const merged = mergeBlueprints(generic, blueprint);
  
  const _skeleton = {
    color: getDefaults(blueprint._defaults, 'color'),
    content: getDefaults(blueprint._defaults, 'content'),
    ...skeleton,
    style: {...skeleton.style, ...getDefaults(blueprint._defaults, 'style')},
    name: merged.name,
    variant: getClosestVariant(blueprint.variant, merged.variants),
    elements: mapValues(merged.elements, generateElementSkeleton),
    groups: mapValues(merged.groups, ({_default, options}) => {
      const selected = _default || randomItem(options);
      return generateGroupSkeleton(isString(selected) ? {name: selected} : selected);
    }),
    blueprint: omit(merged, ['_defaults']),
    uid: 'uid_' + uniqueId(),
  }
  _skeleton.clones = generateCloneSkeletons(merged.clones, _skeleton);

  return _skeleton;
}

function generateCloneSkeletons(clones, source) {
  return isArray(clones)
          ? clones.map((clone, i) => generateCloneSkeleton(i, clone))
          : range(0, clones).map(i => generateCloneSkeleton(i, source));
}

function generateCloneSkeleton(index, blueprint) {
  let skeleton = (blueprint.isGroup ? generateGroupSkeleton : generateElementSkeleton)(blueprint);
  if(blueprint.isGroup) {
    const _blueprint = cloneDeep(blueprint);
    _blueprint.groups = mapValues(blueprint.groups, group => ({_default: group}));
    skeleton = generateGroupSkeleton(_blueprint);
  } else {
    skeleton = generateElementSkeleton(blueprint);
  }
  skeleton.relativeId = skeleton.relativeId + "_" + index;
  skeleton.index = index;
  skeleton.isClone = true;
  return skeleton;
}

function getDefaults(_defaults={}, key) {
  return _defaults[key] || {};
}

function mergeBlueprints(generic, blueprint) {
  return mergeWith({}, generic, blueprint, (g, b) => (
    isArray(g) && isArray(b) ? b : undefined
  ));
}


export function getClosestVariant(variantToMatch={}, variants) {
  if(isEmpty(variants)) {
    return {};
  }

  const randomizedVariants = sortBy(variants, _ => Math.random());
  const variantsWithScores = map(randomizedVariants, variant => {
    const _variant = { score: 0 };
    forEach(variant, ({options, _default}, key) => {
      if(variantToMatch[key] !== undefined && includes(options, variantToMatch[key])) {
        _variant[key] = variantToMatch[key];
        _variant.score++;
      } else {
        _variant[key] = _default || randomItem(options);
      }
    })
    return _variant;
  })

  const sorted = sortBy(variantsWithScores, variant => -variant.score);
  return omit(sorted[0], ['score']);
}