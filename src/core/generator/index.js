import { generateAlternatives } from './alternatives';
import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { assignContent } from './content';
import { assignStyles } from './style';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';

import { randomItem } from '../utils';
import { range, reduce, uniqueId, forEach } from 'lodash';


export function init() {

  const master = {
    id: 'p_' + uniqueId(),
    brandColors: {
      highlight: ['#3ECF8E', '#6772e5'],
      light: {
        text: ['#6b7c93'],
        background: ['#fff', '#F6F9FC'],
      },
      dark: {
        text: ['#c4f0ff', '#fff'],
        background: ['#32325D', '#43458B'],
      },
    },
    isPage: true,
    sections: reduce(range(0, 3), (sections, i) => {
      const skeletons = generateSectionComponentAlternatives({});
      const skeleton = randomItem(skeletons);

      const page = {sections}
      const section = buildSectionFromSkeleton(skeleton, page);
      
      section.color = { background: 'light-background-' + i % 2 };
      forEach(section.groups, group => colorGroup(group, page.sections))
      forEach(section.elements, element => colorElement(element, page.sections))
      
      assignContent(section, []);
      assignStyles(section, page);

      return [...sections, section];
    }, [])
  }
  
  const alternatives = generateAlternatives(master, {component: true}, [master.sections[0]]);  
  return { master, alternatives };
}