import * as blueprints from '../../../components/page/elements/_blueprints';
import { find, filter, flatMap, startsWith, some } from 'lodash';
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
  
  let background = element.group.color.background || element.group.section.color.background;
  if(blueprint.color.background) {
    const valid = filter(elements, e => e.name === element.name && e.color.background);
    const fn = find(rules, fn => some(valid, fn));
    if(fn) {
      const matches = filter(valid, fn);
      element.color.background = getMode(matches.map(e => e.color.background));
    } else {
      element.color.background = blueprint.color.background + '-0';
    }
    background = element.color.background;
  } 
  
  if(blueprint.color.text) {
    const valid = filter(elements, e => (e.group.color.background || e.group.section.color.background) === background);
    const fna = find(rules, fn => some(valid, fn));
    console.log(fna);
    if(fna) {
      const matches = filter(valid, fna);
      element.color.text = getMode(matches.map(e => e.color.text));
    } else {
      element.color.text = blueprint.color.text + '-0';
    }
  }
  const prefix = startsWith(background, 'light') ? 'light' : 'dark';
  
  if(blueprint.color.text === 'text-0') {
    blueprint.color.text = prefix + '-text-0';
  }
  if(blueprint.color.background === 'background-0') {
    blueprint.color.background = prefix + '-background-0';
  }
}