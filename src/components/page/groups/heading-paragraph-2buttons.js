import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicHeading, BasicParagraph } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';


class HeadingParagraph2Buttons extends React.Component {
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
export default HeadingParagraph2Buttons;

export const blueprint = {
  inherits: [TalkingPoint],
  style: {},
  color: {
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
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