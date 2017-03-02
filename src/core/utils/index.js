import { random, find } from 'lodash';

export function randomItem(arr) {
  return arr[random(arr.length - 1)];
}

export function getSafeFromObjects(objects, key, _default) {
  const object = find(objects, (object={}) => object[key])
  return object ? object[key] : _default;
}