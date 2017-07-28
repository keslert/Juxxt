import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph } from '../elements/_blueprints';

class HeadingParagraph extends React.Component {
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

export default HeadingParagraph;

export const blueprint = {
  inherits: ['TalkingPoint', 'RowBuffer'],
  style: {},
  color: {},
  background: {
    color: true,
    border: true,
    borderRadius: true,
    shadow: true,
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
    },
  },
}