import * as blueprints from '../../../../components/page/elements/_blueprints';
import { styles } from './shared-styles';
import { styleItem } from '../utils';
import { getSection } from '../../generator-utils';
import { isEqual, flatMap, zipObject, values }  from 'lodash';

export function styleElement(element, page) {
  const blueprint = blueprints[element.name];
  element.inherits = blueprint.inherits;
  const sharedStyles = zipObject(element.inherits, element.inherits.map(name => styles[name]));
  const elements = flatMap(page.sections, section => section._elements);

  const rules = [
    e => e.fullId === element.fullId,
    e => isEqual(e.layout, element.layout) &&
         e.parent.name === element.parent.name && isEqual(e.parent.layout, element.parent.layout) &&
         e.section.name === element.section.name && isEqual(e.section.layout, element.section.layout),
    
    e => isEqual(e.layout, element.layout) &&
         e.parent.name === element.parent.name && isEqual(e.parent.layout, element.parent.layout) &&
         e.section.name === element.section.name,

    e => isEqual(e.layout, element.layout) &&
         e.parent.name === element.parent.name &&
         e.section.name === element.section.name,
        
    e => isEqual(e.layout, element.layout) && 
         e.section.name === element.section.name,
    e => 
         e.section.name === element.section.name && isEqual(e.section.layout, element.section.layout),
    e => e.section.name === element.section.name,
    e => true,
  ]
  
  element._possibleStyles = Object.assign({}, ...values(sharedStyles), blueprint.style);
  styleItem(element, elements, rules, {style: blueprint.style, sharedStyles});
}