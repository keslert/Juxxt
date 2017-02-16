import { random } from 'lodash';

export function randomItem(arr) {
  return arr[random(arr.length - 1)];
}