import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicHeading, BasicSubheading } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';


class HeadingSubheading2Buttons extends React.Component {
  render() {
    const { elements, variant, style, color } = this.props;
    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        align={variant.align} />
    )
  }
}
export default HeadingSubheading2Buttons;

export const blueprint = {
  inherits: [TalkingPoint],
  style: {},
  color: {
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    subheading: {
      name: BasicSubheading.name,
    },
   button: {
      name: BasicButton.name,
    },
    secondaryButton: {
      name: BasicButton.name,
    }

  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}