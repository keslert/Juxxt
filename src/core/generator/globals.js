import { randomItem } from '../utils';
import { selectColors } from './colors';


function generateGlobals() {
  return {
    colors: selectColors(),
    
    buttonStyle: randomItem(['Rounded', 'Round', 'Square', 'Raised']),
    heading: {
      multiplier: 2.0,
      weight: 'bold',
      transform: randomItem(['none', 'uppercase']),
    },
    smallHeading: {
      multipler: 1.2,
      weight: 'bold',
      transform: randomItem(['none', 'uppercase']),
    },
    font: randomItem(['Montserrat', 'Roboto', 'Lato']),
    fontSize: 14,
  }
}

export function selectGlobals(page, modifications) {
  if(modifications.globals) {
    return generateGlobals(page);
  }
  return page.globals;
}