import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicKicker, BasicButton, BasicSubheading, BasicHeading } from '../elements/_blueprints';

class KickerHeadingSubheadingButton extends React.Component {
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
export default KickerHeadingSubheadingButton;

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
    subheading: {
      name: BasicSubheading.name,
    },
  },
  groups: {
    buttonList: {
      options: ['ButtonList'],
    }
  },
}