import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph, BasicKicker } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';

const KickerHeadingParagraph = ({
  elements,
  variant,
  style,
  color,
}) => {

  return (
    <TalkingPointComponent
      style={style}
      color={color}
      elements={elements}
      groups={{}}
      variant={variant} />
  )
}
export default KickerHeadingParagraph;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
  color: {},
  elements:  {
    kicker: {
      name: BasicKicker.name,
    },
    heading: {
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
    },
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}