import * as blueprints from '../../../components/page/elements/_blueprints';
import { find, filter, flatMap, some, isFunction } from 'lodash';
import { getMode } from '../../utils';
import { getPrimary } from './utils';

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
  
  let background = getGroupOrSectionBackground(element);
  if(blueprint.color.background) {
    const valid = filter(elements, e => 
      e.name === element.name && 
      e.color.background && 
      getGroupOrSectionBackground(e) === background
    );
    
    const fn = find(rules, fn => some(valid, fn));
    if(isFunction(fn)) {
      const matches = filter(valid, fn);
      element.color.background = getMode(matches.map(e => e.color.background));
    } else {
      element.color.background = blueprint.color.background;
    }
    background = element.color.background;
  } 
  
  if(blueprint.color.text) {

    const valid = filter(elements, e => 
      e.name === element.name &&
      e.color.text && 
      getElementGroupOrSectionBackground(e) === background
    )

    const fn = find(rules, fn => some(valid, fn));
    if(isFunction(fn)) {
      const matches = filter(valid, fn);
      element.color.text = getMode(matches.map(e => e.color.text));
    } else {
      const bgBlueprint = find(page.backgroundBlueprint, blueprint => blueprint.color === background)
      element.color.text = getPrimary(bgBlueprint.text);
    }
  }
  //bg for defaults 4 button!
  if(element.is == "Button") {
    element.color.background = page.backgroundBlueprint[background].solid[0]
    element.color.text = page.backgroundBlueprint[element.color.background].text[0]
  }
}

function getGroupOrSectionBackground(element) {
  return element.group.color.background || 
         element.group.section.color.background;
}

function getElementGroupOrSectionBackground(element) {
  return element.color.background || getGroupOrSectionBackground(element);
}