import { 
  random, 
  find, 
  isArray, 
  first, 
  forEach,
  includes,
  filter
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