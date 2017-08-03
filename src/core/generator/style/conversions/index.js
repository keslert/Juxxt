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
  shape: v => 'br' + v,//br for border radius

  border: v => 'b-' + v,
  borderWidth: v => 'bw' + v,
  borderRadius: v => 'br' + v,
  height: v => 'h-' + v,
  minHeight: v => 'minh-' + v,
  parallax: v => v ? 'parallax': '',
  fixed: v => v ? 'fixed': '',
  crop: v => 'bg-' + v,
  buttonType: v => 'shadow-' + v,
  shadow: v=> 'shadow-' + v,
  dropShadow: v => 'drop-shadow-' + v[0],
  // unstyledButton: v=> v ? 'unstyledButton' : '',
}


export function convertStyleToAtomic(style) {
  return map(style, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}