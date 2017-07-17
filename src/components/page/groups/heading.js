import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { TalkingPoint } from './_inherits';
import { BasicHeading } from '../elements/_blueprints';

const Heading = ({
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
export default Heading;

export const blueprint = {
  color: {},
  inherits: [TalkingPoint],
  style: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }]
}