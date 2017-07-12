import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicSubheading, BasicHeading } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';


class HeadingSubheadingButton extends React.Component {
  render() {
    const { elements, groups, variant, style, color } = this.props;
    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={groups}
        align={variant.align} />
    )
  }
}

export default HeadingSubheadingButton;

export const blueprint = {
  inherits: [TalkingPoint],
  style: {},
  color: {
    text: 'black',
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
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}