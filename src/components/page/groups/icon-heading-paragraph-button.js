import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'
import { BasicIcon, BasicHeading, BasicParagraph, BasicButton} from '../elements/_blueprints';



class IconHeadingParagraphButton extends React.Component {
  render() {
    const { elements, style, color, groups } = this.props;

    return (
      <TalkingPointIconComponent
        style={style}
        color={color}
        elements={elements}
        groups= {groups}
        />
    )
  }
}
export default IconHeadingParagraphButton;

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
  groups: {
    buttonList: {
      options: ['ButtonList'],
    }
  },
  layout: { iconPosition: ['iconPosition'] },
}