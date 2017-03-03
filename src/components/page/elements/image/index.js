import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Image = styled.img`
  ${props => `
    ${props.height && `height: ${props.height};`}
    ${props.width && `width: ${props.width};`}
    ${props.margin && `margin: ${props.margin};`}
  `}
`

const Image = ({
  src,
  overrides,
  userOverrides,
  getGlobals,
}) => {
  
  const globals = getGlobals();

  const props = {
    src,
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Image {...props } />
  )
}

export const requirements = {}

export const params = {
  width: true,
  height: true,
  margin: true,
}

export default Image;