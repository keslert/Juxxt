import React from 'react';
import Element from '../elements';
import TalkingPointComponent from './common/talking-point'
import { TalkingPoint } from './_inherits';
import Group from './index';

import { BasicImage, BasicHeading, BasicParagraph } from '../elements/_blueprints';

class ImageHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color, variant, groups } = this.props;
    return (
      <div>
        <Element {...elements.image} />
        <Group {...groups.tp} />
      </div>
    )
  }
}
export default ImageHeadingParagraph;

export const blueprint = {
  inherits: [TalkingPoint],
  style: {},
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
    },
  },
  groups: {
    tp: {
      options: ['HeadingParagraph'],
    }
  },
  variants: [{
    align: {
      _default: 'left',
      options:['left','center','right']
    },
    iconPosition: {
      _default: 'column',
      options: ['above', 'column', 'inline'],
    },
  }]
}