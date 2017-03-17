import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Heading = styled.div`
  user-select: none;
  cursor: default;
  ${props => `
    font-family: ${props.fontFamily};
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    color: ${props.color};
    margin: ${props.margin};
    ${props.padding && `padding: ${props.padding};`}; 
  `};
`

const Heading = ({props, content}) => (
  <_Heading {...props}>{content.text}</_Heading>
)
export default Heading;


export const defaultProps = ({palette, globals}) => ({
  color: palette.textHighlight,
  fontFamily: globals.heading.fontFamily,
  fontSize: globals.heading.fontSize,
  fontWeight: globals.heading.fontWeight,
  textTransform: globals.heading.textTransform,
  margin: globals.heading.margin,
})

export const modifiableProps = {
  color: true,
  textTransform: true,
  fontWeight: true,
  fontSize: true,
  text: true,
}

export function getFontSize({userOverwrites}, globals) {
  return userOverwrites.fontSize || globals.heading.fontSize;
}