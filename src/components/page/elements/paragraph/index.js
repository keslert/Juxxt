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

const Paragraph = (props) => (
  <_Paragraph {...props}>
    {props.content.text}
  </_Paragraph>
)
export default Paragraph;

export const defaultProps = ({palette, globals}) => ({
  color: palette.text,
  fontSize: globals.fontSize,
})

export const modifiableProps = {
  color: true,
  fontSize: true,
  margin: true,
  padding: true,
}