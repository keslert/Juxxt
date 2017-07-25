import React from 'react';
import TalkingPointComponent from './common/talking-point';

class HeadingSubheading extends React.Component {
  render() {
    const { elements, layout, color, style } = this.props;

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
export default HeadingSubheading;

export const blueprint = {
  color: {},
  inherits: ['TalkingPoint', 'RowBuffer'],
  style: {},
  elements: {
    heading: {
      name: 'BasicHeading',
    },
    subheading: {
      name: 'BasicSubheading',
    },
  },
  layouts: {
    align: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  }
}