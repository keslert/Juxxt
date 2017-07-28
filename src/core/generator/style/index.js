import { forEach, groupBy } from 'lodash';
import { styleSection } from './section';
import { styleGroup } from './group';
import { styleElement } from './element';

export function assignStyles(section, page) {
  styleSection(section, page);

  const groupGroups = groupBy(section._groups, g => g.id);
  forEach(groupGroups, groups => {
    styleGroup(groups[0], page);
    forEach(groups, g => g.style = groups[0].style);
  })
  
  const elementGroups = groupBy(section._elements, e => e.id);
  forEach(elementGroups, elements => {
    styleElement(elements[0], page);
    forEach(elements, e => e.style = elements[0].style);
  })
}