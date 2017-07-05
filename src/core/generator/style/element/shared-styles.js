import { range } from 'lodash';
import * as names from '../../../../components/page/elements/_inherits';

import { 
  mh0,
  p0,
} from '../utils';

export const styles = {
  [names.Heading]: {
    textTransform: {
      options: ['none', 'uppercase']
    },
    fontWeight: {
      options: [2,4,6,8],
    },
    ...p0,
    ...mh0,
    marginBottom: {
      _default: 2,
      options: range(0, 4),
    },
    fontFamily: {
      options: ['Abril', 'Bitter', 'Fira Sans', 'Libre Franklin', 'Merriweather', 'Playfair Display', 'PT Serif', 'Roboto', 'Rubik', 'Source Sans Pro'],
    }
  },
  [names.Paragraph]: {
    ...p0,
    marginBottom: {
      _default: 2,
      options: range(0, 4),
    }
  },
  [names.Media]: {
    aspectRatio: {
      _default: 'auto',
      options: ['auto', '1x1', '16x9', '9x16', '4x3', '3x4', '6x4', '4x6', '8x5', '5x8', '7x5', '5x7']
    },
    borderRadius: {
      _default: '0',
      options: [0,1,2,3,4,'-pill'],
    },
  },
  [names.Link]: {

  },
  [names.Button]: {

  },
}