import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicLink, BasicKicker } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';

const KickerHeadingLink = ({
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
export default KickerHeadingLink;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {
    textAlign: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  },
  color: {},
  elements:  {
    kicker: {
      name: BasicKicker.name,
    },
    heading: {
      name: BasicHeading.name,
    },
    links: {
      name: BasicLink.name,
    },
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}