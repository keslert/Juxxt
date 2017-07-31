import styles from './shared-styles';
import { styleItem } from './utils';
import { isEqual, flatMap, zipObject, values }  from 'lodash';

export function styleGroup(group, page) {
  const blueprint = group.blueprint;
  group.inherits = blueprint.inherits;
  const sharedStyles = zipObject(group.inherits, group.inherits.map(name => styles[name]));
  const groups = flatMap(page.sections, section => section._groups);

  const rules = [
    g => g.fullId === group.fullId,
    g => g.parent.name === group.parent.name && g.section.name === group.section.name,
    g => g.parent.name === group.parent.name,
    g => g.section.name === group.section.name,
    g => true,
  ]
  
  styleItem(group, groups, rules, {style: blueprint.style, sharedStyles});
}
