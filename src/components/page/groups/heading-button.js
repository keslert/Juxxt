import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicHeading } from '../elements/_blueprints';

class HeadingButton extends React.Component {
  render() {
    const { elements, groups, style, color } = this.props;
    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={groups}
        />
    )
  }
}

export default HeadingButton;

export const blueprint = {
  inherits: ['RowBuffer'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  color: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
  },
  groups: {
    buttonList: {
      options: ['ButtonList'],
    }
  },
}