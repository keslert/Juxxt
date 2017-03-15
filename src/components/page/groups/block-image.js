import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

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

export const requirements = {
  elements: {
    image: {
      element: 'Image',
    }
  },
}

export const defaultProps = () => ({
  
})

export const modifiableProps = {
  width: true,
  height: true,
  maxWidth: true,
  margin: true,
  padding: true,
};