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

  order: v => 'order-' + v,
  borderRadius: v => 'br' + v,
  borderStyle: v => 'b-' + v,
  borderWidth: v => 'bw' + v,
  height: v => 'h-' + v,
  minHeight: v => 'minh-' + v,
  parallax: v => v ? 'parallax': '',
  fixed: v => v ? 'fixed': '',
  crop: v => 'bg-' + v,
  raisedButton: v=> v ? 'raisedButton' : '',
  shadowedButton: v=> v ? 'shadowedButton' : '',
  unstyledButton: v=> v ? 'unstyledButton' : '',
}


export function convertStyleToAtomic(style) {
  return map(style, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}