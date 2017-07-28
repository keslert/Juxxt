import { isEqual, zipObject, values } from 'lodash';
import styles from './shared-styles';
import { styleItem } from './utils';

export function styleSection(section, page) {  
  const blueprint = section.blueprint;
  section.inherits = blueprint.inherits;
  const sharedStyles = zipObject(section.inherits, section.inherits.map(name => styles[name]));

  const rules = [
    s => s.id === section.id,
    // TODO: Maybe something about the children included?
    s => true,
  ]

  section._possibleStyles = Object.assign({}, ...values(sharedStyles), blueprint.style);
  styleItem(section, page.sections, rules, {style: blueprint.style, sharedStyles});
}