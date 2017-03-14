import { randomItem } from '../utils';
import { selectColors } from './colors';


function generateGlobals() {

  const fontFamily = randomItem(['Montserrat', 'Roboto', 'Lato']);
  const headingFontFamily = fontFamily;

  return {
    colors: selectColors(),
    fontFamily,
    fontSize: 14,
    iconSize: 64,
    maxPageWidth: 960,
    button: {
      type: randomItem(['Rounded', 'Round', 'Square', 'Raised']),
      textTransform: randomItem(['none', 'uppercase']),
    },
    heading: {
      fontFamily: headingFontFamily,
      fontSize: 36,
      fontWeight: randomItem(['bold', 'normal', 'lighter']),
      textTransform: randomItem(['none', 'uppercase']),
      margin: "0 0 15px",
    },
    smallHeading: {
      fontFamily: headingFontFamily,
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: randomItem(['none', 'uppercase']),
      margin: "0 0 10px",
    },
    section: {
      padding: "80px 10px",
    }
  }
}

export function selectGlobals(page, modifications) {
  if(modifications.globals) {
    return generateGlobals(page);
  }
  
  return page.globals;
}