import { getMode, randomItem } from '../../utils';
import tinycolor from 'tinycolor2';
import { 
  range, 
  reduce, 
  uniqueId, 
  forEach, 
  clone, 
  sortBy, 
  map, 
  max, 
  some, 
  filter,
  zipObject,
} from 'lodash';

export function isSimilar(color1, color2) {
  const DIFFERENCE = 50;
  return (Math.abs(tinycolor(color1).toHsl().h - tinycolor(color2).toHsl().h) <= DIFFERENCE);
}

export function getSortedByMostVibrant(colors,background="#ffffff") {
  return sortBy(colors, color => -getVibrancy(color,background));
}

export function getSortedByMostBrightness(colors) {
  return sortBy(colors, color=> -tinycolor(color).getBrightness());
}

export function getMostVibrantColor(colors) {
  return getSortedByMostVibrant(colors)[0];
}

export function getSortedByMostNeutral(colors) {
  return sortBy(colors, color => tinycolor(color).toHsv().s);
}

export function getMostNeutralColor(colors) {
  return getSortedByMostNeutral(colors)[0];
}

export function getSortedByPreference(colors, preference) {
  if(preference === 'vibrant') {
    return getSortedByMostVibrant(colors);
  }

  return getSortedByMostNeutral(colors);
}

export function getReadableColors(colors, background='#ffffff', threshold=1.8) {
  const colorReadability = zipObject(colors, colors.map(color => tinycolor.readability(color, background)));
  const readable = filter(colors, color => colorReadability[color] >= threshold);
  return sortBy(readable, color => -colorReadability[color]);
}

const LUM_TARGET = 0.5;
const SAT_TARGET = 1;
const LUM_WEIGHT = 6;
const SAT_WEIGHT = 4;

export function getVibrancy(color,background) {
  const _color = tinycolor(color);
  const luminance = _color.getLuminance();
  const saturation = _color.toHsv().s;

  const lDiff = (1 - Math.abs(LUM_TARGET - luminance)) * LUM_WEIGHT;
  const sDiff = (1 - Math.abs(SAT_TARGET - saturation)) * SAT_WEIGHT;
  
  // if(tinycolor.isReadable(background, '#ffffff')) {
    return (lDiff + sDiff) / 2;
  // }
  //  else {
  //      return saturation > 0.1 ? -1 : 0;
  //  }
  }

export function tintColor(base, color) {
  const _base = tinycolor(base).toHsv();
  _base.h = tinycolor(color).toHsv().h
  return tinycolor(_base).toHexString();
}

