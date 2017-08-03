import React from 'react';
import Element from '../elements';
import TalkingPointIconComponent from './common/talking-point-icon'
import { BasicIcon, BasicHeading, BasicButton} from '../elements/_blueprints';



class IconHeadingButton extends React.Component {
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
export default IconHeadingButton;

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
  },
  groups: {
    buttonList: {
      options: ['ButtonList'],
    }
  },
  layout: { iconPosition: ['iconPosition'] },
}