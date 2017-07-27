import React from 'react';
import TalkingPointComponent from './common/talking-point';

class Heading extends React.Component {
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
export default Heading;

export const blueprint = {
  color: {},
  inherits: ['TalkingPoint'],
  style: {},
  elements: {
    heading: {
      name: 'BasicHeading',
    },
  },
}