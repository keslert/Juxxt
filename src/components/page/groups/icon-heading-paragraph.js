import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'

class IconHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color, layout } = this.props;

    return (
      <TalkingPointIconComponent
        style={style}
        color={color}
        elements={elements}
        layout={layout} />
    )
  }
}
export default IconHeadingParagraph;

export const blueprint = {
  inherits: ['TalkingPoint', 'RowBuffer'],
  style: {},
  color: {},
  elements: {
    icon: { name: 'BasicIcon' },
    heading: { name: 'BasicHeading' },
    paragraph: { name: 'BasicParagraph' },
  },
  layouts: {
    align: {
      _default: 'inherit',
      options:['inherit', 'left','center','right']
    },
    iconPosition: {
      _default: 'column',
      options: ['above', 'column', 'inline'],
    },
  }
}