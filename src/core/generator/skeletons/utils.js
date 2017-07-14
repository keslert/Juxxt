import { omit, mapValues, map, includes, forEach, sortBy, isEmpty, pick, isString, extend } from 'lodash';
import { randomItem } from '../../utils';

import { generateGroupSkeleton } from './group';
import { generateElementSkeleton } from './element';

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

export function extractSkeletonFromItem(item) {
  const skeleton = {
    id: item.id,
    name: item.name,
    variant: item.variant,
    groups: mapValues(item.groups, extractSkeletonFromItem),
    elements: mapValues(item.elements, extractSkeletonFromItem),
    clones: isEmpty(item.clones) ? undefined : { _default: item.clones.length },
  }
  
  return skeleton;
}

export function generateItemSkeleton(name, blueprint, variant, overrides) {
  const _blueprint = extend({}, blueprint, overrides);

  return {
    name,
    variant: getClosestVariant(variant, _blueprint.variants),
    elements: mapValues(_blueprint.elements || {}, element => ({
      ...element,
      ...generateElementSkeleton(element.name)
    })),
    groups: mapValues(_blueprint.groups || {}, ({options}) => {
      const option = randomItem(options);
      if(isString(option)) {
        return generateGroupSkeleton(option)
      }
      return {
        ...option, 
        ...generateGroupSkeleton(option.name, undefined, option.overrides)
      };
    }),
  }
}