import * as blueprints from '../../../components/page/elements/_blueprints';
import { find, filter, flatMap, startsWith, some, isFunction } from 'lodash';
import { getMode } from '../../utils';

export function colorElement(element, sections) {
  element.color = {};
  const blueprint = blueprints[element.name];
  const elements = flatMap(sections, s => s.elements);

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
      getElementBackground(e) === background
    )

    const fn = find(rules, fn => some(valid, fn));
    if(isFunction(fn)) {
      const matches = filter(valid, fna);
      element.color.text = getMode(matches.map(e => e.color.text));
    } else {
      element.color.text = blueprint.color.text;
    }
  }
}

function getGroupOrSectionBackground(element) {
  return element.group.color.background || 
         element.group.section.color.background;
}

function getElementGroupOrSectionBackground(element) {
  return element.color.background || getGroupOrSectionBackground(element);
}