import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicSubheading, BasicHeading, } from '../elements/_blueprints';

class HeadingSubheading extends React.Component {
  render() {
    const { elements, color, style } = this.props;

    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={{}}
        />
    )
  }
}
export default HeadingSubheading;

export const blueprint = {
  color: {},
  inherits: ['RowBuffer'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    subheading: {
      name: BasicSubheading.name,
    },
  },
}