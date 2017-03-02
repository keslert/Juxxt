import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Image = styled.span`
  ${props => `
    ${props.height && `height: ${props.height};`}
    ${props.width && `width: ${props.width};`}
    ${props.padding && `padding: ${props.padding};`}
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
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Image {...props }>
      <img src={src} />
    </_Image>
  )
}

export const requirements = {}

export const params = {
  width: true,
  height: true,
  padding: true,
  margin: true,
}

export default Image;