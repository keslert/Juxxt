import * as blueprints from '../../../../components/page/elements/_blueprints';
import { styles } from './shared-styles';
import { styleItem } from '../utils';
import { isEqual, flatMap, zipObject }  from 'lodash';

export function styleElement(element, page) {
  const blueprint = blueprints[element.name];
  element.inherits = blueprint.inherits;
  const sharedStyles = zipObject(element.inherits, element.inherits.map(name => styles[name]));
  const elements = flatMap(page.sections, section => section.elements);

  const rules = [
    e => e.id === element.id,
    e => isEqual(e.variant, element.variant) &&
         e.group.name === element.group.name && isEqual(e.group.variant, element.group.variant) &&
         e.group.section.name === element.group.section.name && isEqual(e.group.section.variant, element.group.section.variant),
    
    e => isEqual(e.variant, element.variant) &&
         e.group.name === element.group.name && isEqual(e.group.variant, element.group.variant) &&
         e.group.section.name === element.group.section.name,

    e => isEqual(e.variant, element.variant) &&
         e.group.name === element.group.name &&
         e.group.section.name === element.group.section.name,
        
    e => isEqual(e.variant, element.variant) && 
         e.group.section.name === element.group.section.name,
    e => 
         e.group.section.name === element.group.section.name && isEqual(e.group.section.variant, element.group.section.variant),
    e => e.group.section.name === element.group.section.name,
    e => true,
  ]
  
  styleItem(element, elements, rules, {style: blueprint.style, sharedStyles});
}