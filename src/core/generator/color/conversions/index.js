import { map } from 'lodash';

const conversions = {
  background: v => 'bg-' + v,
  text: v => 'c-' + v,
}

export function convertColorToAtomic(color) {
  return map(color, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}