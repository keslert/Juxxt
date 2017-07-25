import React from 'react';
import TalkingPointComponent from './common/talking-point';

class Heading extends React.Component {
  render() {
    const { elements, layout, style, color } = this.props;

    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={{}}
        layout={layout} />
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
  layouts: {
    align: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  }
}