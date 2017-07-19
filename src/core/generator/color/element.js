import { find, filter, flatMap, some, isFunction } from 'lodash';
import { getMode } from '../../utils';
import { getSection, getBackground } from '../generator-utils';
import { getMostVibrantColor } from './utils';

// 1. No color, get preferred color
// 2. Color but background has changed
  // a. Precendent exists
  // b. Find mapping of color in new palette


export function colorElement(element, page) {
  const elements = flatMap(page.sections, s => filter(s._elements, e => e.name === element.name));
  const rules = [
    e => e.fullRelativeId === element.fullRelativeId,
    e => e.fullId === element.fullId,
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
    // TODO: Map across palettes
    const solids = colorBlueprint.bgBlueprints[background].solids;
    const preferred = getPreferredColor(solids, element.blueprint.color.background);
    element.color.background = preferred;
    element.color.borderColor = preferred;
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
    element.color.text = getPreferredColor(texts, element.blueprint.color.text);
  }
  element.color._textBackground = background;
}

function getPreferredColor(colors, preference) {
  if(preference === 'vibrantOrWhite'){
    return getVibrantOrWhite(colors, preference);
  }
  if(preference === 'vibrant') {
    return getMostVibrantColor(colors);
  }
  return colors[0];
}

function getVibrantOrWhite(colors, preference) {
  if(colors.indexOf('#ffffff') !== -1) {
    return '#ffffff';
  }
  return getMostVibrantColor(colors);
}
  