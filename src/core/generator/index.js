import { generateAlternatives } from './alternatives';
import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';

import { randomItem } from '../utils';
import shortid from 'shortid';
import { range, reduce } from 'lodash';


export function init() {

  const master = {
    id: shortid.generate(),
    brandColors: {
      primary: '#3ECF8E',
      secondary: '#6772e5',
      tertiary: '#6772e5',
      light: {
        text: '#6b7c93',
        background: '#fff',
        offBackground: '#F6F9FC',
      },
      dark: {
        text: '#c4f0ff',
        background: '#32325D',
        offBackground: '#43458B',
      }      
    },
    isPage: true,
    sections: reduce(range(0, 3), (sections) => {
      const skeletons = generateSectionComponentAlternatives({});
      const skeleton = randomItem(skeletons);

      const page = {sections}
      const section = buildSectionFromSkeleton(skeleton, page);
      section.color = { background: 'light' };

      const { page2 } = { ...sections, section };
      assignColor(section, page);
      assignContent(section, []);
      assignStyles(section, page);

      return [...sections, section];
    }, [])
  }
  
  const alternatives = generateAlternatives(master, {component: true}, master.sections[0]);  
  return { master, alternatives };
}