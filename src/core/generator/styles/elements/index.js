import * as types from '../../../../components/page/elements/_types';
import { range } from 'lodash';

import { 
  mh0,
  p0,
} from '../utils';







const sharedStyles = {
  Heading: {
    textTransform: ['none', 'uppercase'],
    fontWeight: range(1, 9),
    ...p0,
    ...mh0,
    marginTop: range(0, 4),
    marginBottom: range(0, 4),
    fontFamily: ['Abril', 'Bitter', 'Fira Sans', 'Libre Franklin', 'Merriweather', 'Playfair Display', 'PT Serif', 'Roboto', 'Rubik', 'Source Sans Pro'],
  },
  Paragraph: {
    ...p0,
    marginBottom: range(0, 4),
  },
  Media: {
    aspectRatio: ['auto', '1x1', '16x9', '9x16', '4x3', '3x4', '6x4', '4x6', '8x5', '5x8', '7x5', '5x7']
  }
}

const elements = {
  [types.BasicKicker.name]: {
    sharedStyles: ['Heading'],
    styles: {
      fontSize: range(1, 3),
      paddingTop: range(0, 3),
      paddingBottom: range(0, 3),
    }
  },
  [types.BasicHeading.name]: {
    sharedStyles: ['Heading'],
    styles: {
      fontSize: range(3, 6),
    }
  },
  [types.BasicSubheading.name]: {
    sharedStyles: ['Heading'],
    textTransform: ['none'],
    fontSize: range(3, 5),
  },
  [types.BasicParagraph.name]: {
    sharedStyles: ['Paragraph'],
  },

  [types.BasicImage.name]: {
    sharedStyles: ['Media'],
  },
  [types.SmallProfileImage.name]: {
    sharedStyles: ['Media'],
    styles: {
      aspectRatio: ['1x1', '16x9', '9x16', '4x3', '3x4', '6x4', '4x6', '8x5', '5x8', '7x5', '5x7'],
      borderRadius: [0, 1, 2, '100%'],
    }
  }
}
