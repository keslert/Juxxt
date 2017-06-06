import { 
  random, 
  find, 
  isArray, 
  first, 
  forEach,
  includes,
  filter,
  mapValues,
  isEmpty,
  intersection,
  every,
  map,
  reduce,
  flatten,
  maxBy,
} from 'lodash';

export function randomItem(arr) {
  return arr[random(arr.length - 1)];
}

export function getSafeFromObjects(objects, key, _default) {
  const object = find(objects, (object={}) => object[key])
  return object ? object[key] : _default;
}

export function getFirstIfList(arr) {
  return isArray(arr) ? first(arr) : arr;
}

export function lowerCamelCaseToRegular(camelCase) {
  return camelCase.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

export function flattenPage(page) {
  const flattened = {};
  const flatten = (item) => {
    flattened[item.uuid] = item;
    ['sections', 'groups', 'elements', 'clones'].forEach(key => {
      item[key] && forEach(item[key], flatten)
    })
  }
  flatten(page);
  return flattened;
}

export function toggleListItem(list, item) {
  return includes(list, item)
         ? filter(list, listItem => listItem !== item)
         : [...list, item];
}

export function getCombinations(hashMap) {
  return reduce(hashMap, (combinations, list, key) => (
    flatten(combinations.map(combination => (
      list.map(item => ({...combination, [key]: item}))
    )))
  ), [{}]);
}

export function getValidVariation(variations, restrictions) {
  if(!variations)
    return {};

  const _variations = map(variations, variation => (
    mapValues(variation, (values, key) => {
      const restriction = restrictions[key];
      return restriction ? intersection(values, restriction) : values;
    })
  ))
  
  const filtered = filter(_variations, variation => every(variation, values => !isEmpty(values)));

  return isEmpty(filtered)
         ? mapValues(randomItem(variations), randomItem)
         : mapValues(randomItem(filtered), randomItem)
}

export function getMode(list) {
  const items = reduce(list, (res, key) => {
    res[key] = (res[key] || 0) + 1;
    return res;
  }, {});

  return maxBy(Object.keys(items), key =>  items[key])
}