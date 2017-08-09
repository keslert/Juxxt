import { getMode, randomItem } from '../../utils';
import tinycolor from 'tinycolor2';
import request from 'request';
import { colorGroup } from './group';
import { colorElement } from './element';
import { 
  range, 
  reduce, 
  uniqueId, 
  forEach, 
  cloneDeep,
  clone, 
  sortBy, 
  map, 
  includes,
  max, 
  some, 
  filter,
  zipObject,
} from 'lodash';
import { linkSkeleton } from '../generator-utils';

const COLORMIND_API = "http://colormind.io/api/";

export function fetchColorMindPalette(paletteObj, onSuccess, onFailure) {
  const rgbArr = map(paletteObj, (o)=> {
    const clr = tinycolor(o.color);
    return o.locked ? [clr._r,clr._g,clr._b] : "N";
  });
  const payload = {
    model: "default",
    input : rgbArr,
  };
  request.post({url: COLORMIND_API, body: JSON.stringify(payload) }, (err,resp,body)=> {
    if(err) {
      onFailure(err,resp);
    } else {
      const response = JSON.parse(body).result;
      const palette = response.map(([r,g,b]) => tinycolor({r,g,b}).toHexString())
      onSuccess(palette);
    }
  });
}

export function shuffleSectionColor(sectionSkeleton, page, restricted, primaries) {
  const bgblueprint = page.colorBlueprint.bgBlueprint;
  const oldSectionBgColor = sectionSkeleton.color.background;

  if(tinycolor(oldSectionBgColor).toHsv().s < 0.11) {//if color's hella white
    linkSkeleton(sectionSkeleton);
    return sectionSkeleton;
  }
  let backgrounds = filter(getSortedByPreference(page.colorBlueprint.backgrounds, sectionSkeleton.blueprint.color.background),(color)=> {
    return (!(tinycolor(color).toHsv().s < 0.11) && !includes(restricted,color)); //make sure it's not hella white
  });
  if(backgrounds[0]==undefined) {
    restricted.length = 0;
    primaries.length = 0;
    backgrounds = filter(getSortedByPreference(page.colorBlueprint.backgrounds, sectionSkeleton.blueprint.color.background),(color)=> {
      return (!(tinycolor(color).toHsv().s < 0.11) && !includes(restricted,color)); //make sure it's not hella white
    });
  }
  const skeleton = cloneDeep(sectionSkeleton);
  skeleton.color = {background:backgrounds[0]};
  skeleton.changes = {background:backgrounds[0]};

  if(!includes(primaries,backgrounds[0])) primaries.push(backgrounds[0]);
  linkSkeleton(skeleton);
  skeleton._groups.forEach(e => colorGroup(e, page));
  skeleton._elements.forEach(e => colorElement(e, page));

  return skeleton;
}

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

