import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Link = styled.p`
  user-select: none;
  cursor: pointer;
  ${props => `
    color: ${props.color};
    font-size: ${props.fontSize};
    ${props.margin && `margin: ${props.margin};`};
    ${props.padding && `padding: ${props.padding};`};
  `}
`

const Link = ({
  color,
  content,
  overrides,
  userOverrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = {
    color,
    fontSize: globals.fontSize, 
    ...content,
    ...overrides,
    ...userOverrides
  };

  return (
    <_Link {...props}>
      {props.text}
    </_Link>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
}

export default Link;