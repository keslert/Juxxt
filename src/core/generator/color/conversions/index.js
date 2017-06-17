import { map } from 'lodash';

const conversions = {
  background: v => 'bg-' + v.substr(1),
  text: v => 'c-' + v.substr(1),
}

export function convertColorToAtomic(color) {
  return map(color, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}