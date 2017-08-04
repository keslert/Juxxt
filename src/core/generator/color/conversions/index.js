import { map, isString } from 'lodash';

const conversions = {
  pattern: v => 'ptrn-' + v,
  gradient: v => 'grd-' + v.substr(1),
  text: v => 'c-' + v.substr(1),
  // backgroundImage: v=> 'bgimg-' + btoa(v),
  background: v => 'bg-' + v.substr(1),
  borderColor: v => 'b-' + v.substr(1),
}

export function convertColorToAtomic(color) {
  return map(color, (value, key) => (
    conversions[key] && isString(value) && conversions[key](value)
  )).join(' ') + ' ';
}