import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Paragraph = styled.p`
  user-select: none;
  cursor: default;
  ${props => `
    color: ${props.color};
    font-size: ${props.fontSize};  
    ${props.margin && `margin: ${props.margin};`};
    ${props.padding && `padding: ${props.padding};`};
  `}
`

const Paragraph = ({
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
    <_Paragraph {...props}>
      {props.text}
    </_Paragraph>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
}

export default Paragraph;