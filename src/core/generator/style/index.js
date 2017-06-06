import { forEach } from 'lodash';
import { styleSection } from './section';
import { styleGroup } from './group';
import { styleElement } from './element';

export function assignStyles(section, page) {
  styleSection(section, page);
  forEach(section.groups, group => styleGroup(group, page));
  forEach(section.elements, element => styleElement(element, page));
}