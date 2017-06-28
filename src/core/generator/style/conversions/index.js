import { map } from 'lodash';

import margin from './margin';
import padding from './padding';
import display from './display';
import text from './text';
import width from './width';
import aspect from './aspect';

const conversions = {
  ...margin,
  ...padding,
  ...display,
  ...text,
  ...width,
  ...aspect,
  borderRadius: v => 'br' + v,
  height: v => 'h-' + v
}


export function convertStyleToAtomic(style) {
  return map(style, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}