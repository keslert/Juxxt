import React from 'react';
import TalkingPoint from './common/talking-point';
import { BasicHeading, BasicParagraph } from '../elements/_types';

const HeadingParagraph = ({
  elements,
  variation,
  styles,
}) => {

  return (
    <TalkingPoint
      styles={styles}
      elements={elements}
      variation={variation} />
  )
}
export default HeadingParagraph;

export const blueprint = {
  sharedStyles: ['TalkingPoint'],
  styles: {},
  requirements: {
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
}