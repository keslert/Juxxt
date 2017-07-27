import styles from './shared-styles';
import { styleItem } from './utils';
import { getSection } from '../generator-utils';
import { isEqual, flatMap, zipObject, values }  from 'lodash';

export function styleElement(element, page) {
  const blueprint = element.blueprint;
  element.inherits = blueprint.inherits;
  const sharedStyles = zipObject(element.inherits, element.inherits.map(name => styles[name]));
  const elements = flatMap(page.sections, section => section._elements);

  const rules = [
    e => e.fullId === element.fullId,
    e => e.parent.name === element.parent.name &&
         e.section.name === element.section.name,
    e => e.parent.name === element.parent.name,
    e => e.section.name === element.section.name,
    e => true,
  ]
  
  element._possibleStyles = Object.assign({}, ...values(sharedStyles), blueprint.style);
  styleItem(element, elements, rules, {style: blueprint.style, sharedStyles});
}