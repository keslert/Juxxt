import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'

class IconHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color } = this.props;

    return (
      <TalkingPointIconComponent
        style={style}
        color={color}
        elements={elements}
        />
    )
  }
}
export default IconHeadingParagraph;

export const blueprint = {
  inherits: ['TalkingPoint', 'RowBuffer'],
  style: {
    iconPosition: {
      _default: 'column',
      options: ['above', 'column', 'inline'],
    },
  },
  color: {},
  elements: {
    icon: { name: 'BasicIcon' },
    heading: { name: 'BasicHeading' },
    paragraph: { name: 'BasicParagraph' },
  },
}