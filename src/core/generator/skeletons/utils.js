import { omit, mapValues, map, includes, forEach, sortBy, isEmpty } from 'lodash';
import { randomItem } from '../../utils';

export function getClosestVariant(variant={}, options) {
  if(isEmpty(options)) {
    return {};
  }

  const randomizedOptions = sortBy(options, _ => Math.random());
  const variantsWithScores = map(randomizedOptions, option => {
    const _variant = { score: 0 };
    forEach(option, (variantOptions, key) => {
      if(variant[key] !== undefined && includes(variantOptions, variant[key])) {
        _variant[key] = variant[key];
        _variant.score++;
      } else {
        _variant[key] = randomItem(variantOptions);
      }
    })
    return _variant;
  })

  const variants = sortBy(variantsWithScores, variant => -variant.score);
  return omit(variants[0], ['score']);
}

export function extractSkeletonFromSection(section) {
  return {
    id: section.id,
    name: section.name,
    variation: section.variation,
    groups: mapValues(section.groups, group => ({
      id: group.id,
      name: group.name,
      variation: group.variation,
      elements: mapValues(group.elements, element => ({
        id: element.id,
        name: element.name
      }))
    }))
  }
}