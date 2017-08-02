import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicKicker, BasicHeading } from '../elements/_blueprints';


class KickerHeading extends React.Component {
  render() {
    const { elements, style, color } = this.props;

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
export default KickerHeading;

export const blueprint = {
  color: {},
  inherits: ['BaseGroup'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  elements: {
    kicker: {
      name: BasicKicker.name,
    },
    heading: {
      name: BasicHeading.name,
    },
  },
}