import { find, filter, flatMap, some, isFunction, sortBy, clamp } from 'lodash';
import { getMode } from '../../utils';
import { getSection, getBackground } from '../generator-utils';
import { getSortedByMostVibrant } from './utils';


export function colorElement(element, page) {
  const elements = flatMap(page.sections, s => filter(s._elements, e => e.name === element.name));
  const rules = [
    e => e.fullRelativeId === element.fullRelativeId,
    e => e.relativeId === element.relativeId,
    e => e.parent.name === element.parent.name && e.index === element.index,
    e => e.parent.name === element.parent.name,
    e => true,
  ]

  if(element.blueprint.color.background) {
    colorBackground(rules, elements, element, page.colorBlueprint);
  }
  if(element.blueprint.color.text) {
    colorText(rules, elements, element, page.colorBlueprint);
  }
}

function colorBackground(rules, elements, element, colorBlueprint) {
  const background = getBackground(element.parent);
  if(element.color.background && background === element.color._parentBackground) {
    return;
  }

  const valid = filter(elements, e => (e.color && e.color.background) && getBackground(e.parent) === background);

  const fn = find(rules, fn => some(valid, fn));
  if(isFunction(fn)) {
    const matches = filter(valid, fn);
    element.color.background = getMode(matches.map(e => e.color.background));
    element.color.borderColor = getMode(matches.map(e => e.color.borderColor));
  } else {
    const solids = colorBlueprint.bgBlueprints[background].solids;
    const prevSolids = colorBlueprint.bgBlueprints[element.color._parentBackground || background].solids;
    
    if(element.color.background !== 'transparent') {
      const preferred = getMappedPreferredColor(solids, prevSolids, element.color.background, element.blueprint.color.background);
      element.color.background = preferred;
      element.color.borderColor = preferred;
    }
  }
  element.color._parentBackground = background;
}

function colorText(rules, elements, element, colorBlueprint) {
  const background = getBackground(element);
  if(element.color.text && background === element.color._textBackground) {
    return;
  }

  const valid = filter(elements, e => (e.color && e.color.text) && getBackground(e) === background)
  const fn = find(rules, fn => some(valid, fn));
  if(isFunction(fn)) {
    const matches = filter(valid, fn);
    element.color.text = getMode(matches.map(e => e.color.text));
  } else {
    const texts = colorBlueprint.bgBlueprints[background].texts;
    const prevTexts = colorBlueprint.bgBlueprints[element.color._textBackground || background].texts;
    element.color.text = getMappedPreferredColor(texts, prevTexts, element.color.text, element.blueprint.color.text);
  }
  if(element.color.background === 'transparent') {
    element.color.borderColor = element.color.text;
  }

  element.color._textBackground = background;
}



const _preferanceMap = {
  whiteOrVibrant: colors => sortByWhite(colors, getSortedByMostVibrant),
  whiteOrReadable: colors => sortByWhite(colors, colors => colors),
  vibrant: getSortedByMostVibrant,
  readable: colors => colors,
}

function getMappedPreferredColor(colors, prevColors, prevColor, preference) {
  const sortedColors = _preferanceMap[preference](colors);
  const sortedPrevColors = _preferanceMap[preference](prevColors);
  const index = sortedPrevColors.indexOf(prevColor);
  return sortedColors[clamp(index, 0, sortedColors.length - 1)];
}

function sortByWhite(colors, preferredSort) {
  return sortBy(preferredSort(colors), color => color === '#ffffff' ? 0 : 1);
}
  