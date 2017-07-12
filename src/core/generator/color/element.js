import * as blueprints from '../../../components/page/elements/_blueprints';
import { find, filter, flatMap, some, isFunction } from 'lodash';
import { getMode } from '../../utils';
import { getMostVibrantColor, getTint, getSortedByMostBrightness } from './utils';

export function colorElement(element, page) {

  element.color = {};
  const blueprint = blueprints[element.name];
  const elements = flatMap(page.sections, s => s.elements);
  const rules = [
    e => e.id === element.id,
    e => e.group.section.id === element.group.section.id,
    e => e.group.name === element.group.name,
    e => true,
  ]
  let background = getGroupOrSectionBackground(element,page);

  if(blueprint.color.background) {
    const valid = filter(elements, e => 
      e.name === element.name && 
      e.color && e.color.background && 
      getGroupOrSectionBackground(e,page) === background &&
      !hasImageBackground(element)
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
      getElementGroupOrSectionBackground(e, page) === background
    )
    const fn = find(rules, fn => some(valid, fn));
    if(isFunction(fn)) {
      const matches = filter(valid, fn);
      element.color.text = getMode(matches.map(e => e.color.text));
    } else {
      const colorBlueprint = page.colorBlueprint.bgBlueprints[background];
      if(element.color.background == undefined && element.group.section.color.backgroundImage != null && element.group.color.background == undefined)
        element.color.text = "#ffffff";
      else
        element.color.text = getPreferredColor(colorBlueprint.texts, blueprint.color.text);
    }
  }
}

function hasImageBackground(element) {
  return (element.group.section.color.backgroundImage != null);
}

function getGroupOrSectionBackground(element, page) {
  return element.group.color.background || 
         element.group.section.color.background;
}

function getElementGroupOrSectionBackground(element, page) {
  return element.color.background || getGroupOrSectionBackground(element, page);
}

function getPreferredColor(colors, preference) {
  if(preference === 'vibrant') {
    return getMostVibrantColor(colors);
  }
  return colors[0];
}