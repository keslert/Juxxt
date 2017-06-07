import React, { PropTypes } from 'react';

import TalkingPointComponent from './common/talking-point';
import { TalkingPoint } from './_inherits';
import { BasicSubheading, BasicHeading } from '../elements/_blueprints';


const HeadingSubheading = ({
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
      variant={variant} />
  )
}
export default HeadingSubheading;

export const blueprint = {
  color: {},
  inherits: [TalkingPoint],
  style: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    subheading: {
      name: BasicSubheading.name,
    },
  }
}