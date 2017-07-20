import { getMostVibrantColor, tintColor, getReadableColors, isSimilarHue } from './utils';
import { zipObject, filter, map, forEach, uniq, flatMap, clone } from 'lodash';
import { absDiff } from '../../utils';
import tinycolor from 'tinycolor2';
import geopattern from 'geopattern';



export function buildPageColorBlueprint(colors) {
  const _colors = uniq([...colors, '#ffffff'])
  const primary = getMostVibrantColor(_colors);
  const darkGray = tintColor("#211b1a", primary, 20);
  const lightGray = tintColor('#f5f6f7', primary, 20);
  const allColors = [..._colors, darkGray, lightGray];

  const blueprints = filter(allColors.map(color => ({
    color,
    texts: getReadableColors(allColors, color),
  })), blueprint => blueprint.texts.length)
  
  const backgrounds = map(blueprints, 'color');

  forEach(blueprints, blueprint => {
    blueprint.solids = getReadableColors(backgrounds, blueprint.color, 1.4);
    blueprint.gradients = getGradients(blueprint.color, colors);
    blueprint.patterns = getPatterns(blueprint.color);
  });

  return {
    primary,
    lightGray,
    darkGray,
    lights: ['#ffffff', lightGray],
    texts: uniq(flatMap(blueprints, 'texts')),
    backgrounds,
    bgBlueprints: zipObject(backgrounds, blueprints),
  }
}

const GRADIENT_DIRECTIONS = ['to left top', 'to right top', 'to right', 'to left', ' to left bottom', 'to right bottom', 'to bottom', 'to top'];
function getGradients(base, colors) {
  const gradients = [];
  
  const _colors = filter(colors, color => color !== base);
  forEach(_colors, color => {
    const _base = tinycolor(base).toHsl();
    const _color = tinycolor(color).toHsl();
    if(absDiff(_base.h, _color.h) < 50 && absDiff(_base.l, _color.l) < 0.2) {
      forEach(GRADIENT_DIRECTIONS, direction => {
        gradients.push({start: base, end: color, direction});
      })
    }
  })

  const darker = tinycolor(base).darken(15).toString();
  forEach(GRADIENT_DIRECTIONS, direction => {
    gradients.push({start: base, end: darker, direction});
  })

  return gradients;
}

const PATTERNS = ['chevrons','octogons','overlappingCircles','plusSigns','xes','sineWaves','hexagons','overlappingRings','plaid','triangles','squares','nestedSquares','mosaicSquares','concentricCircles','diamonds','tessellation']
function getPatterns(color) {
  const patterns = zipObject(PATTERNS, PATTERNS.map(pattern => 
    geopattern.generate(
      Math.random().toString(36).substring(7),
      { color, generator: pattern }
    ).toDataUrl()
  ))

  return patterns;
}