import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';
import { BasicImage } from '../elements/_blueprints';

const BlockImage = ({
  elements,
  variation,
  props,
}) => {
  return (
    <div {...props}>
      <Element {...elements.image} />
    </div>
  )
}
export default BlockImage;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
    }
  },
  variants: [],
}