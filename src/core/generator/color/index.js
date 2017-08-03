import { forEach } from 'lodash';

import { colorSection } from './section';
import { colorGroup } from './group';
import { colorElement } from './element';

export function assignColor(section, page) {
  colorSection(section, page.sections);
  forEach(section._groups, group => colorGroup(group, page));
  forEach(section._elements, element => colorElement(element, page));
}


/**
Assign Color
- New Component
  - Try to match old component colors
- New Palette
  - Cascading Changes
- New Content
  - Colors stay the same
- New Variation
  - Colors stay the same

*/