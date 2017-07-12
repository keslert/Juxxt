import * as blueprints from '../../../components/page/elements/_blueprints';
import { find, filter, flatMap, some, isFunction } from 'lodash';
import { getMode } from '../../utils';
import { getSection, getBackground } from '../generator-utils';
import { getMostVibrantColor, getTint } from './utils';

export function colorElement(element, page) {

  element.color = {};
  const blueprint = blueprints[element.name];
  const elements = flatMap(page.sections, s => s._elements);
  const rules = [
    e => e.id === element.id,
    e => e.section.id === element.section.id,
    e => e.parent.name === element.parent.name,
    e => true,
  ]
  
  let background = getBackground(element.parent);

  if(blueprint.color.background) {
    const valid = filter(elements, e => 
      e.name === element.name && 
      e.color && e.color.background && 
      getBackground(e.parent) === background
    );
    
    const fn = find(rules, fn => some(valid, fn));
    if(isFunction(fn)) {
      const matches = filter(valid, fn);
      element.color.background = getMode(matches.map(e => e.color.background));
      element.color.borderColor = getMode(matches.map(e => e.color.borderColor));
    } else {
      const colorBlueprint = page.colorBlueprint.bgBlueprints[background];
      const preferred = getPreferredColor(colorBlueprint.solids, blueprint.color.background);
      element.color.background = preferred;
      element.color.borderColor = preferred;
    }
    background = element.color.background;
  } 

  if(blueprint.color.text) {
    const valid = filter(elements, e => 
      e.name === element.name &&
      e.color && e.color.text && 
      getBackground(e) === background
    )
    const fn = find(rules, fn => some(valid, fn));
    if(isFunction(fn)) {
      const matches = filter(valid, fn);
      element.color.text = getMode(matches.map(e => e.color.text));
    } else {
      const colorBlueprint = page.colorBlueprint.bgBlueprints[background];
      // TODO: If the element doens't have a background, and the group doesn't have a background 
      // and the section background is an image, the text is white.
      element.color.text = getPreferredColor(colorBlueprint.texts, blueprint.color.text);
    }
  }
}

function getPreferredColor(colors, preference) {
  if(preference === 'vibrant') {
    return getMostVibrantColor(colors);
  }
  return colors[0];
}