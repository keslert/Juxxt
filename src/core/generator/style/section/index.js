import blueprints from '../../../../components/page/sections/_blueprints';
import { isEqual, zipObject } from 'lodash';
import { styles } from './shared-styles';
import { styleItem } from '../utils';


export function styleSection(section, page) {  
  const blueprint = blueprints[section.name];
  section.inherits = blueprint.inherits;
  const sharedStyles = zipObject(section.inherits, section.inherits.map(name => styles[name]));

  const rules = [
    s => s.id === section.id,
    s => isEqual(s.variant, section.variant),
    s => true,
  ]
  
  styleItem(section, page.sections, rules, {style: blueprint.style, sharedStyles});
}