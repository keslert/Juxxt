import { map } from 'lodash';

import margin from './margin';
import padding from './padding';
import display from './display';
import fontSize from './font-size';
const conversions = {
  ...margin,
  ...padding,
  ...display,
  ...fontSize,
}


export function convertStyleToAtomic(style) {
  return map(style, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}