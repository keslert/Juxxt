import blueprints from '../../../../components/page/groups/_blueprints';
import { styles } from './shared-styles';
import { styleItem } from '../utils';
import { isEqual, flatMap, zipObject }  from 'lodash';

export function styleGroup(group, page) {
  const blueprint = blueprints[group.name];
  group.inherits = blueprint.inherits;
  const sharedStyles = zipObject(group.inherits, group.inherits.map(name => styles[name]));
  const groups = flatMap(page.sections, section => section.groups);

  const rules = [
    g => isEqual(g.variant, group.variant) && 
         g.section.name === group.section.name && isEqual(g.section.variant, group.section.variant),    
    g => isEqual(g.variant, group.variant) && 
         g.section.name === group.section.name,
    g => 
         g.section.name === group.section.name && isEqual(g.section.variant, group.section.variant),
    g => g.section.name === group.section.name,
    g => true,
  ]
  
  styleItem(group, groups, rules, {style: blueprint.style, sharedStyles});
}
