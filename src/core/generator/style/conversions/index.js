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
  parallax: v => v === "on" ? 'parallax': '',
  fixedNavBar: v => v === "true" ? 'fixedNavBar': '',
<<<<<<< HEAD

=======
  minHeight: v => 'mnh-' + v,
>>>>>>> ae9f3119d75d9e2b6b17b3f8eeee0acf53c9f0fc
  // overlayText: v => v === "true" ? ' overlayText': '', 
  // overlayImage: v => v === "true" ? ' overlayImage': '', 
  // overlayContainer: v => v === "true" ? ' overlayContainer': '', 
  
}


export function convertStyleToAtomic(style) {
  return map(style, (value, key) => (
    conversions[key] && conversions[key](value)
  )).join(' ');
}