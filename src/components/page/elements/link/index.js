import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Link = styled.p`
  user-select: none;
  cursor: pointer;
  ${props => `
    color: ${props.color};
    font-size: ${props.fontSize};  
  `}
`

const Link = ({
  text,
  color,
  fontSize,
  overrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = {
    color,
    fontSize: fontSize || globals.fontSize, 
    ...overrides
  };

  return (
    <_Link {...props}>
      Link
    </_Link>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
}

export default Link;