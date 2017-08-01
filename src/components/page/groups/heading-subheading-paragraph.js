import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { TalkingPoint } from './_inherits';
import { BasicSubheading, BasicHeading, BasicParagraph } from '../elements/_blueprints';

const HeadingSubheadingParagraph = ({
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
export default HeadingSubheadingParagraph;

export const blueprint = {
  color: {},
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    subheading: {
      name: BasicSubheading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
   },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }]
}
}