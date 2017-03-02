import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Heading = styled.div`
  user-select: none;
  cursor: default;
  ${props => `
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    color: ${props.color};
  `};
`

const Heading = ({
  text = 'Heading',
  color,
  textTransform,
  fontWeight,
  fontSize,
  overrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = { 
    fontSize: getFontSize({fontSize, overrides}, globals), 
    fontWeight: fontWeight || globals.heading.fontWeight,
    textTransform: textTransform || globals.heading.textTransform,
    color,
    ...overrides
  }

  return (
    <_Heading {...props}>{text}</_Heading>
  )
}

export default Heading;

export const requirements = {
  // none
}

export const params = {
  color: true,
  textTransform: true,
  fontWeight: true,
  fontSize: true,
}

export function getFontSize(props, globals) {
  return props.overrides.fontSize || 
         props.fontSize ||
         (globals || props.getGlobals()).heading.fontSize;
}