import React from 'react';
import TalkingPointComponent from './common/talking-point';

class KickerHeadingParagraph extends React.Component {
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
export default KickerHeadingParagraph;

export const blueprint = {
  inherits: ['RowBuffer', 'BaseGroup'],
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
}