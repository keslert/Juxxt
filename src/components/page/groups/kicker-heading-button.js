import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicKicker, BasicButton, BasicSubheading, BasicHeading } from '../elements/_blueprints';

class KickerHeadingButton extends React.Component {
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
export default KickerHeadingButton;

export const blueprint = {
  inherits: ['RowBuffer', 'BaseGroup'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  color: {},
  elements:  {
    kicker: {
      name: BasicKicker.name,
    },
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