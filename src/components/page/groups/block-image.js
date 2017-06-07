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
    <_Block {...props}>
      <Element {...elements.image} />
    </_Block>
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