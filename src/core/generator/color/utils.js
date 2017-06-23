import { filter, find, some, map, sortBy, max } from 'lodash';
import { getMode } from '../../utils';
import tinycolor from 'tinycolor2';
import geopattern from 'geopattern';

export function getGradient(color) {
  const _color = tinycolor(color).toHsv();

  _color.s = (tinycolor(color).toHsv().s - 30);
  return "linear-gradient(" + tinycolor(_color).toHexString() +", "+ color +")";
}

export function getPattern(color) {
  return geopattern.generate(Math.random().toString(36).substring(7),{color:color}).toDataUrl();
}

export function colorItem(item, items, rules, blueprint) {
  item.color = {};
  const matches = filter(items, i => i.name === item.name);
  if(matches.length) {
    colorItemLikeItems(item, matches, rules);
  } else {
    colorItemByBlueprint(item, items, blueprint)
  }
}

export function getOkBackgroundColors(arr) {
  const okBackgrounds = [];
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      if(tinycolor.isReadable(arr[j], arr[i], {})) {
        okBackgrounds.push(arr[i]);
        break;
      }
    }
  }
  return okBackgrounds;
}
export function getOkSolids(base, arr){
  let okSolids = [];

  for(let i=0; i<arr.length; i++) {
    if(tinycolor(arr[i]).toHsv()['v'] > 0.2 && base !== arr[i]) {
      okSolids.push(arr[i])
    }
  }
  okSolids = sortBy(okSolids,t=> -tinycolor.readability(t,base));
  return okSolids;

}

export function getOkTextOnBackground(bgColor, arr) {
  const okTexts = [];
  for(let i=0; i<arr.length; i++) {
    const readability = tinycolor.readability(arr[i], bgColor);
    if(readability > 1.8) {
      okTexts.push({
        color:arr[i],
        readability: readability,
      });
    }
  }
  const sortedArr = sortBy(okTexts, t => -t.readability);
  return map(sortedArr, 'color');
}


export function getOkSectionColors(okBackgrounds, websiteColors, palette) {
  const okPayload = {};
  for(let i=0; i<okBackgrounds.length; i++) {
    okPayload[okBackgrounds[i]] = {
      color: okBackgrounds[i],
      text: getOkTextOnBackground(okBackgrounds[i], websiteColors),
      solid: getOkSolids(okBackgrounds[i], palette),
      pattern: getPattern(okBackgrounds[i])
    };
  }
  return okPayload;
}
/*
helper for getPrimary
*/
export function getInvertDiff(arr,target) {
  return arr.map((value)=> 1 - Math.abs(value-target));
}

/**
Returns the best primary color in hex string given a palette
*/
const LUM_TARGET = 0.5;
const SAT_TARGET = 1;
const LUM_WEIGHT = 6;
const SAT_WEIGHT = 4;

export function getPrimary(palette) {
  let lumArr = palette.map((color)=> (tinycolor(color).getLuminance()));
  let saturationArr = palette.map((color)=> (tinycolor(color).toHsv()['s']));
  const diffLum = getInvertDiff(lumArr,LUM_TARGET).map((value)=>value * LUM_WEIGHT);
  const diffSat = getInvertDiff(saturationArr,SAT_TARGET).map((value)=> value * SAT_WEIGHT);
  const finalArr = []
  for(let i=0; i<palette.length; i++) {
    finalArr.push(( diffLum[i] + diffSat[i] )/ 2);
  }
  return palette[finalArr.indexOf(max(finalArr))];
}

export function tintColor(base, color) {
  const _base = tinycolor(base).toHsv();
  _base.h = tinycolor(color).toHsv().h
  return tinycolor(_base).toHexString();
}



function colorItemByBlueprint(item, items, blueprint) {
  const keys = Object.keys(blueprint.color);
  keys.forEach(key => {
    const options = blueprint.color[key].options;
    item.color[key] = options[0] + '-0';
  })
}

function colorItemLikeItems(item, items, rules) {
  const fn = find(rules, fn => some(items, fn));
  const colors = filter(items, fn).map(item => item.color);
  Object.keys(colors[0]).forEach(key => {
    item.color[key] = getMode(map(colors, key));
  })
}

export function getPossibleTextColors(color) {
  switch(color) {
    case 'primary':
    case 'seconary':
    case 'tertiary':
    case 'dark':
    case 'offDark':
      return ['light', 'offLight', 'textOnDark']
    case 'light':
    case 'offLight':
    default: 
      return ['text', 'dark', 'primary', 'secondary', 'tertiary']
  }
}