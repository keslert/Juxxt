import * as blueprints from '../../../../components/page/groups/_blueprints';
import { styles } from './shared-styles';
import { styleItem } from '../utils';
import { isEqual, flatMap, zipObject, values }  from 'lodash';

export function styleGroup(group, page) {
  const blueprint = blueprints[group.name];
  group.inherits = blueprint.inherits;
  const sharedStyles = zipObject(group.inherits, group.inherits.map(name => styles[name]));
  const groups = flatMap(page.sections, section => section._groups);

  const rules = [
    g => g.fullId === group.fullId,
    g => isEqual(g.variant, group.variant) && 
         g.section.name === group.section.name && isEqual(g.section.variant, group.section.variant),    
    g => isEqual(g.variant, group.variant) && 
         g.section.name === group.section.name,
    g => 
         g.section.name === group.section.name && isEqual(g.section.variant, group.section.variant),
    g => g.section.name === group.section.name,
    g => true,
  ]
  
  group._possibleStyles = Object.assign({}, ...values(sharedStyles), blueprint.style);
  styleItem(group, groups, rules, {style: blueprint.style, sharedStyles});
}
