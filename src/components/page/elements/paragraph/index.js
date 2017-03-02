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
  text,
  color,
  overrides,
  userOverrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = {
    color,
    fontSize: globals.fontSize, 
    ...overrides,
    ...userOverrides
  };

  return (
    <_Paragraph {...props}>
      Lorem ipsum dolor sit amet, sea erant civibus id, fugit putent adolescens ad eos. Reque expetendis mei ea. Pro modo saperet ea.
    </_Paragraph>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
}

export default Paragraph;