import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

const BlockImage = ({
  requirements,
  overrides,
  userOverrides,
  palette,
}) => {
  const props = {
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Block {...props}>
      <Element {...requirements.image} src="http://placehold.it/600x400" />
    </_Block>
  )
}
export default BlockImage;


export const requirements = {
  image: {
    type: 'Element',
    options: ['Image'],
  },
}

export const params = {
  width: true,
  height: true,
  maxWidth: true,
  margin: true,
  padding: true,
};