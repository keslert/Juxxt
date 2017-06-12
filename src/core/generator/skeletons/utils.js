import { omit, mapValues, map, includes, forEach, sortBy, isEmpty } from 'lodash';
import { randomItem } from '../../utils';

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

export function extractSkeletonFromSection(section) {
  return {
    id: section.id,
    name: section.name,
    variant: section.variant,
    groups: mapValues(section.groups, group => ({
      id: group.id,
      name: group.name,
      variant: group.variant,
      elements: mapValues(group.elements, element => ({
        id: element.id,
        name: element.name
      }))
    }))
  }
}