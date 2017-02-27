import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Paragraph = styled.p`
  user-select: none;
  cursor: default;
  ${props => `
    color: ${props.color};
    font-size: ${props.fontSize};  
  `}
  
`

const Paragraph = ({
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