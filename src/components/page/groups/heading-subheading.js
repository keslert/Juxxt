import React from 'react';
import TalkingPointComponent from './common/talking-point';

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
  style: {},
  elements: {
    heading: {
      name: 'BasicHeading',
    },
    subheading: {
      name: 'BasicSubheading',
    },
  },
}