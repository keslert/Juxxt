import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _SmallHeading = styled.div`
  ${props => `
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    color: ${props.color};
  `};
`

const SmallHeading = ({
  text = 'SmallHeading',
  color,
  textTransform,
  fontWeight,
  fontSize,
  overrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = { 
    fontSize: fontSize || globals.fontSize * globals.smallHeading.multiplier, 
    fontWeight: fontWeight || globals.smallHeading.fontWeight,
    textTransform: textTransform || globals.smallHeading.textTransform,
    color,
    ...overrides
  }

  return (
    <_SmallHeading {...props}>{text}</_SmallHeading>
  )
}

export default SmallHeading;

export const requirements = {
  // none
}

export const params = {
  color: true,
  textTransform: true,
  fontWeight: true,
  fontSize: true,
}
