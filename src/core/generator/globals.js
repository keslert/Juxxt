import { randomItem } from '../utils';
import { selectColors } from './colors';


function generateGlobals() {
  return {
    colors: selectColors(),
    font: randomItem(['Montserrat', 'Roboto', 'Lato']),
    fontSize: 14,
    iconSize: 64,
    button: {
      type: randomItem(['Rounded', 'Round', 'Square', 'Raised']),
      textTransform: randomItem(['none', 'uppercase']),
    },
    heading: {
      fontSize: 36,
      fontWeight: randomItem(['bold', 'normal', 'lighter']),
      textTransform: randomItem(['none', 'uppercase']),
      margin: "0 0 15px",
    },
    smallHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: randomItem(['none', 'uppercase']),
      margin: "0 0 10px",
    },
    maxPageWidth: 960,
    sectionPadding: "80px 10px",
  }
}

export function selectGlobals(page, modifications) {
  if(modifications.globals) {
    return generateGlobals(page);
  }
  return page.globals;
}