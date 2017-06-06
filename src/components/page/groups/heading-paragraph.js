import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';

const HeadingParagraph = ({
  elements,
  variation,
  styles,
}) => {

  return (
    <TalkingPointComponent
      styles={styles}
      elements={elements}
      variation={variation} />
  )
}
export default HeadingParagraph;

export const blueprint = {
  inherits: [TalkingPoint],
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
  variants: [],
}