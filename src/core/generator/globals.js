import { randomItem } from '../utils';
import { selectColors } from './colors';


function generateGlobals() {
  return {
    colors: selectColors(),
    fonts: ['Montserrat'],
    buttonStyle: randomItem(['Rounded', 'Round', 'Square', 'Raised']),
    heading: {
      multiplier: 2.0,
      weight: 'bold',
      transform: 'none',
    },
    smallHeading: {
      multipler: 1.2,
      weight: 'bold',
      transform: 'none',
    },
    fontSize: 14,
  }
}

export function selectGlobals(page, modifications) {
  if(modifications.globals) {
    return generateGlobals(page);
  }
  return page.globals;
}