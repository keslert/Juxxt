import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'
import { BasicIcon, BasicHeading, BasicParagraph } from '../elements/_blueprints';



class IconHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color } = this.props;

    return (
      <TalkingPointIconComponent
        style={style}
        color={color}
        elements={elements}
        groups={{}}
        />
    )
  }
}
export default IconHeadingParagraph;

export const blueprint = {
  inherits: ['RowBuffer'],
  style: {
    iconPosition: {
      _default: 'column',
      options: ['above', 'column', 'inline'],
    },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  color: {},
  elements: {
    icon: { name: BasicIcon.name },
    heading: { name: BasicHeading.name },
    paragraph: { name: BasicParagraph.name },
  },
  layout: { iconPosition: ['iconPosition'] },
}