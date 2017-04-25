import { randomItem, getCombinations } from '../utils';
import { generateColorsAlternatives } from './colors';

export function initGlobals() {

  const fontFamily = randomItem(generateFonts());
  const headingFontFamily = fontFamily;

  return {
    colors: randomItem(generateColorsAlternatives()),
    fontSize: 14,
    iconSize: 64,
    maxPageWidth: 960,
    buttons: {
      type: randomItem(generateButtonTypeAlternatives),
      textTransform: randomItem(generateTextTransformAlternatives),
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


export function generateGlobalsAlternatives(globals, focus) {
  let colors = [globals.colors];

  if(focus === 'brand-colors') {
    colors = generateColorsAlternatives();
  }

  return colors.map(brandColors => ({
    ...globals,
    colors: brandColors,
  }));
}

function generateFonts() {
  return ['Montserrat', 'Roboto', 'Lato'];
}

function generateTextFontSizes() {
  return [14, 15, 18];
}

function generateButtonTypeAlternatives() {
  return ['Rounded', 'Round', 'Square', 'Raised']
}

function generateTextTransformAlternatives() {
  return ['none', 'uppercase'];
}