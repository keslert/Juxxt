import { randomItem } from '../utils';
import { selectColors } from './colors';


export function generateGlobals() {

  const fontFamily = randomItem(['Montserrat', 'Roboto', 'Lato']);
  const headingFontFamily = fontFamily;

  return {
    colors: selectColors(),
    fontSize: 14,
    iconSize: 64,
    maxPageWidth: 960,
    buttons: {
      type: randomItem(['Rounded', 'Round', 'Square', 'Raised']),
      textTransform: randomItem(['none', 'uppercase']),
    },
    text: {
      fontSize: 14,
      fontFamily: fontFamily,
    },
    headings: {
      fontFamily: headingFontFamily,
      fontSize: 36,
      fontWeight: randomItem(['bold', 'normal', 'lighter']),
      textTransform: randomItem(['none', 'uppercase']),
      margin: "0 0 15px",
    },
    smallHeadings: {
      fontFamily: headingFontFamily,
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: randomItem(['none', 'uppercase']),
      margin: "0 0 10px",
    },
    sections: {
      padding: "80px 10px",
    }
  }
}