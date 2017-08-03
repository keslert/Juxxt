import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicSubheading, BasicHeading } from '../elements/_blueprints';

class HeadingSubheadingButton extends React.Component {
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

export default HeadingSubheadingButton;

export const blueprint = {
  inherits: ['RowBuffer'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  color: {
    background: 'none',
  },
  elements: {
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