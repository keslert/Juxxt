import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';


class HeadingParagraph extends React.Component {
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

export default HeadingParagraph;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
  color: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
    },
  },
  layouts: {
    align: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  }
}