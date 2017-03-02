import { randomItem } from '../utils';
import { selectColors } from './colors';


function generateGlobals() {
  return {
    buttonStyle: randomItem(['Rounded', 'Round', 'Square', 'Raised']),
    colors: selectColors(),
    font: randomItem(['Montserrat', 'Roboto', 'Lato']),
    fontSize: 14,
    iconSize: 64,
    heading: {
      fontSize: 36,
      weight: 'bold',
      transform: randomItem(['none', 'uppercase']),
    },
    smallHeading: {
      fontSize: 16,
      weight: 'bold',
      transform: randomItem(['none', 'uppercase']),
    },
  }
}

export function selectGlobals(page, modifications) {
  if(modifications.globals) {
    return generateGlobals(page);
  }
  return page.globals;
}