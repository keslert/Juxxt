import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicKicker, BasicHeading, BasicSubheading } from '../elements/_blueprints';


class KickerHeadingSubheading extends React.Component {
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
export default KickerHeadingSubheading;

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
}