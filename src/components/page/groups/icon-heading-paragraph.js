import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'
import { BasicIcon, BasicHeading, BasicParagraph } from '../elements/_blueprints';

class IconHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color, variant } = this.props;
    return (
      <TalkingPointIconComponent
        style={style}
        color={color}
        elements={elements}
        align={variant.align} />
    )
  }
}
export default IconHeadingParagraph;

export const blueprint = {
  inherits: [],
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
  variants: [],
}