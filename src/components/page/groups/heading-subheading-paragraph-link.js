import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { TalkingPoint } from './_inherits';
import { BasicSubheading, BasicHeading, BasicParagraph, BasicLink } from '../elements/_blueprints';

const HeadingSubheadingParagraphLink = ({
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
export default HeadingSubheadingParagraphLink;

export const blueprint = {
  color: {},
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
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
    links: {
        name: BasicLink,
    },
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }]
}