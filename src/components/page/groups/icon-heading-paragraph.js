import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'
import { TalkingPoint } from './_inherits';
import { BasicIcon, BasicHeading, BasicParagraph } from '../elements/_blueprints';

class IconHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color, variant } = this.props;

    return (
      <TalkingPointIconComponent
        style={style}
        color={color}
        elements={elements}
        variant={variant} />
    )
  }
}
export default IconHeadingParagraph;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
  color: {},
  elements: {
    icon: {
      name: BasicIcon.name,
    },
    heading:{
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
    },
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