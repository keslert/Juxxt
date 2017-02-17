import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Paragraph = styled.p`
  color: ${props => props.color};
  ${props => props.fontSize && `font-size: ${props.fontSize}`};
`

const Paragraph = ({
  text = "",
  color,
  fontSize,
  requirements,
  overrides,
}) => (
  <_Paragraph color={color} fontSize={fontSize}>
    Lorem ipsum dolor sit amet, sea erant civibus id, fugit putent adolescens ad eos. Reque expetendis mei ea. Pro modo saperet ea.
  </_Paragraph>
)

export const requirements = {

}

export const params = {

}

export default Paragraph;