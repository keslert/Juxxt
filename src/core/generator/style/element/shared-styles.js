import { range } from 'lodash';

import { 
  mh0,
  p0,
} from '../utils';

export const names = {
  Heading: 'Heading',
  Paragraph: 'Paragraph',
  Media: 'Media',
}

export const styles = {
  [names.Heading]: {
    textTransform: {
      options: ['none', 'uppercase']
    },
    fontWeight: {
      options: range(1, 9),
    },
    ...p0,
    ...mh0,
    marginTop: {
      options: range(0, 4),
    },
    marginBottom: {
      options: range(0, 4),
    },
    fontFamily: {
      options: ['Abril', 'Bitter', 'Fira Sans', 'Libre Franklin', 'Merriweather', 'Playfair Display', 'PT Serif', 'Roboto', 'Rubik', 'Source Sans Pro'],
    }
  },
  [names.Paragraph]: {
    ...p0,
    marginBottom: {
      options: range(0, 4),
    }
  },
  [names.Media]: {
    aspectRatio: {
      options: ['auto', '1x1', '16x9', '9x16', '4x3', '3x4', '6x4', '4x6', '8x5', '5x8', '7x5', '5x7']
    }
  }
}