import React from 'react';
import TalkingPointComponent from './common/talking-point';

class KickerHeadingParagraph extends React.Component {
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
export default KickerHeadingParagraph;

export const blueprint = {
  inherits: ['TalkingPoint', 'RowBuffer', 'BaseGroup'],
  style: {},
  color: {},
  elements:  {
    kicker: {
      name: 'BasicKicker',
    },
    heading: {
      name: 'BasicHeading',
    },
    paragraph: {
      name: 'BasicParagraph',
    },
  },
  layouts: {
    align: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  },
}