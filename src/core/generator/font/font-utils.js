import { randomItem } from '../../utils';
import { fontDetails, headings, paragraphs } from './index'; 

import { cloneDeep, random, forEach, includes } from 'lodash';

export function generateTypography(blueprint, page) {
  const typography = cloneDeep(blueprint);
  typography.kicker = typography.kicker || {};
  typography.largeHeading = typography.largeHeading || {};
  typography.heading = typography.heading || {};
  typography.subheading = typography.subheading || {};
  typography.paragraph = typography.paragraph || {};
  typography.smallHeading = typography.smallHeading || {};
  
  assignFontFamily(typography);
  assignSizes(typography);
  assignWeights(typography);
  assignTransform(typography);

  return typography;
}

export function assignTransform(typography) {
  const fontDetail = fontDetails[typography.heading.fontFamily];

  let transform = typography.heading.textTransform;
  if(!includes(fontDetail.transforms, transform)) {
    transform = randomItem(fontDetail.transforms);
  }
  typography.heading.textTransform = transform;
  typography.largeHeading.textTransform = transform;
}

export function assignFontFamily(typography) {
  const pFamily = typography.paragraph.fontFamily;
  const hFamily = typography.heading.fontFamily;
  if(!hFamily) {
    typography.heading.fontFamily = pFamily 
      ? randomItem(paragraphs[pFamily])
      : randomItem(Object.keys(headings));
  }
  
  if(!pFamily) {
    typography.paragraph.fontFamily = randomItem(headings[typography.heading.fontFamily]);
  }

  
  typography.largeHeading = { fontFamily: typography.heading.fontFamily };
  typography.smallHeading = { fontFamily: typography.heading.fontFamily };
  typography.kicker = { fontFamily: typography.paragraph.fontFamily };
  typography.subheading = { fontFamily: typography.paragraph.fontFamily };
}

export function assignWeights(typography) {
  const option = randomItem([
    {
      largeHeading: { fontWeight: 7 },
      heading: { fontWeight: 7 },
      paragraph: { fontWeight: 4 },
      smallHeading: { fontWeight: 7 },
      subheading: { fontWeight: 4 },
      kicker: { fontWeight: 4 },
    },{
      largeHeading: { fontWeight: 7 },
      heading: { fontWeight: 7 },
      paragraph: { fontWeight: 4 },
      smallHeading: { fontWeight: 7 },
      subheading: { fontWeight: 7 },
      kicker: { fontWeight: 4 }, 
    },{
      largeHeading: { fontWeight: 4 },
      heading: { fontWeight: 4 },
      paragraph: { fontWeight: 4 },
      smallHeading: { fontWeight: 4 },
      subheading: { fontWeight: 4 },
      kicker: { fontWeight: 4 },
    },{
      largeHeading: { fontWeight: 4 },
      heading: { fontWeight: 4 },
      paragraph: { fontWeight: 4 },
      smallHeading: { fontWeight: 4 },
      subheading: { fontWeight: 4 },
      kicker: { fontWeight: 4 },
    }
  ]);
  forEach(typography, (obj, key) => {
    obj.fontWeight = obj.fontWeight || option[key].fontWeight;
  })
}
export function assignSizes(typography) {
  const option = randomItem([
    {
      largeHeading: { fontSize: 8 },
      heading: { fontSize: 7 },
      paragraph: { fontSize: 2 },
      smallHeading: { fontSize: 3 },
      subheading: { fontSize: 5 },
      kicker: { fontSize: 3 },
    },{
      largeHeading: { fontSize: 7 },
      heading: { fontSize: 6 },
      paragraph: { fontSize: 3 },
      smallHeading: { fontSize: 3 },
      subheading: { fontSize: 4 },
      kicker: { fontSize: 2 },
    },{
      largeHeading: { fontSize: 7 },
      heading: { fontSize: 6 },
      paragraph: { fontSize: 2 },
      smallHeading: { fontSize: 3 },
      subheading: { fontSize: 4 },
      kicker: { fontSize: 4 },
    },{
      largeHeading: { fontSize: 7 },
      heading: { fontSize: 6 },
      paragraph: { fontSize: 2 },
      smallHeading: { fontSize: 3 },
      subheading: { fontSize: 4 },
      kicker: { fontSize: 2 },
    }
  ]);
  
  forEach(typography, (obj, key) => {
    obj.fontSize = obj.fontSize || option[key].fontSize;
  })
}