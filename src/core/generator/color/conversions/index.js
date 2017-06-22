import { map, isString } from 'lodash';

const conversions = {
  pattern: v => 'ptrn-' + v.substr(1),
  gradient: v => 'grd-' + v.substr(1),
  background: v => 'bg-' + v.substr(1),
  text: v => 'c-' + v.substr(1),
}

export function convertColorToAtomic(color) {
  return map(color, (value, key) => (
    conversions[key] && isString(value) && conversions[key](value)
  )).join(' ');
}