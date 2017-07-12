import * as blueprints from '../../../../components/page/elements/_blueprints';
import { styles } from './shared-styles';
import { styleItem } from '../utils';
import { getSection } from '../../generator-utils';
import { isEqual, flatMap, zipObject }  from 'lodash';

export function styleElement(element, page) {
  const blueprint = blueprints[element.name];
  element.inherits = blueprint.inherits;
  const sharedStyles = zipObject(element.inherits, element.inherits.map(name => styles[name]));
  const elements = flatMap(page.sections, section => section._elements);

  const rules = [
    e => e.id === element.id,
    e => isEqual(e.variant, element.variant) &&
         e.parent.name === element.parent.name && isEqual(e.parent.variant, element.parent.variant) &&
         e.section.name === element.section.name && isEqual(e.section.variant, element.section.variant),
    
    e => isEqual(e.variant, element.variant) &&
         e.parent.name === element.parent.name && isEqual(e.parent.variant, element.parent.variant) &&
         e.section.name === element.section.name,

    e => isEqual(e.variant, element.variant) &&
         e.parent.name === element.parent.name &&
         e.section.name === element.section.name,
        
    e => isEqual(e.variant, element.variant) && 
         e.section.name === element.section.name,
    e => 
         e.section.name === element.section.name && isEqual(e.section.variant, element.section.variant),
    e => e.section.name === element.section.name,
    e => true,
  ]
  
  styleItem(element, elements, rules, {style: blueprint.style, sharedStyles});
}