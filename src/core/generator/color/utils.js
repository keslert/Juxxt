import { getMode, randomItem } from '../../utils';
import tinycolor from 'tinycolor2';
import geopattern from 'geopattern';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, fromPairs, toPairs, max, some, filter } from 'lodash';



function isSimilarHue(color1,color2) {
  const DIFFERENCE = 50;
  return (Math.abs(tinycolor(color1)['h'] - tinycolor(color2)['h']) <= DIFFERENCE);
}

export function getGradient(color, okBackgrounds) {
  const gradient_list = [];
  const GRADIENT_DIRECTIONS = ['to left top', 'to right top', 'to left', 'to right', ' to left bottom', 'to right bottom', 'to top', 'to bottom'];
  let _gradient = {};
  /*
  Add similar hue gradients with different gradient directions
  */
  for(let i=0;i<okBackgrounds.length;i++) {
    if(isSimilarHue(color,okBackgrounds[i])) {
        for(let j=0;j<GRADIENT_DIRECTIONS.length;j++) {
          _gradient = {
            start: color,
            end: okBackgrounds[i],
            direction: GRADIENT_DIRECTIONS[j],
          }
          gradient_list.push(clone(_gradient));
        }
    }
  }
  /*
  Add gradient directions to darkened color
  */
  for(let j=0;j<GRADIENT_DIRECTIONS.length;j++) {
    _gradient = {
      start: color,
      end: tinycolor(color).darken(15).toString(),
      direction: GRADIENT_DIRECTIONS[j],
    }
    gradient_list.push(clone(_gradient));
  }

  return gradient_list;
}

const PATTERNS = ['chevrons','octogons','overlappingCircles','plusSigns','xes','sineWaves','hexagons','overlappingRings','plaid','triangles','squares','nestedSquares','mosaicSquares','concentricCircles','diamonds','tessellation']
export function getPattern(color) {
  const patternArr = {};
  forEach(PATTERNS, pattern=>
    patternArr[pattern] = geopattern.generate(Math.random().toString(36).substring(7),{color:color,generator: pattern}).toDataUrl()
  );
  return patternArr;
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
      gradient: getGradient(okBackgrounds[i], okBackgrounds),
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

export function getPrimaryScores(palette) {
  let lumArr = palette.map((color)=> (tinycolor(color).getLuminance()));
  let saturationArr = palette.map((color)=> (tinycolor(color).toHsv()['s']));
  const diffLum = getInvertDiff(lumArr,LUM_TARGET).map((value)=>value * LUM_WEIGHT);
  const diffSat = getInvertDiff(saturationArr,SAT_TARGET).map((value)=> value * SAT_WEIGHT);
  const finalArr = []
  for(let i=0; i<palette.length; i++) {
    if(!tinycolor.isReadable(palette[i],"#FFFFFF"))
      finalArr.push(0);
    else
      finalArr.push(( diffLum[i] + diffSat[i] )/ 2);
  }

  let copyPalette= {};
  for(let i=0 ;i<finalArr.length; i++){
    copyPalette[palette[i]] = finalArr[i];
  }
  return copyPalette
}

/**
Returns the best primary color in hex string given a palette
*/
const LUM_TARGET = 0.5;
const SAT_TARGET = 1;
const LUM_WEIGHT = 6;
const SAT_WEIGHT = 4;

export function getSortedByPrimary(palette) {
  let copyPalette = getPrimaryScores(palette);
  copyPalette = fromPairs(sortBy(toPairs(copyPalette), a=> a[1]).reverse())
  return Object.keys(copyPalette);
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