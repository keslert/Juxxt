import { random, find, isArray, first } from 'lodash';

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