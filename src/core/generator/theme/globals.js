import { randomItem, getCombinations } from '../utils';
import { generateColorsAlternatives } from './colors';
import { range } from 'lodash';

export function initGlobals() {

  const fontFamily = randomItem(generateFonts());
  const headingFontFamily = fontFamily;

  // element: Text
  // family: Heading
  // name: Kicker

  // element: Text
  // family: Paragraph
  // name: SmallParagraph


  // element: Image
  // family: Icon
  // name: Small Icon

  // element: Image
  // family: Icon
  // name: Medium Icon

  

  return {
    colors: generateColorsAlternatives(),
    baseFontSize: [12,14,16,18],
    iconSize: [64],
    maxPageWidth: [960, 1024, 1170],
    
    // buttons: {
    //   type: generateButtonTypeAlternatives,
    //   textTransform: generateTextTransformAlternatives,
    // },
    // text: {
    //   fontSize: range(1, 7),
    //   fontFamily: fontFamily,
    // },
    // headings: {
    //   fontFamily: headingFontFamily,
    //   fontSize: range(3, 7),
    //   fontWeight: randomItem(['bold', 'normal', 'lighter']),
    //   textTransform: randomItem(['none', 'uppercase']),
    //   margin: "0 0 15px",
    // },
    // smallHeadings: {
    //   fontFamily: headingFontFamily,
    //   fontSize: 20,
    //   fontWeight: 'bold',
    //   textTransform: randomItem(['none', 'uppercase']),
    //   margin: "0 0 10px",
    // },
    // sections: {
    //   padding: "80px 10px",
    // }
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