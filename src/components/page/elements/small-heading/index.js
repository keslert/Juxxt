import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { getSafeFromObjects } from '../../../../core/utils';

const _SmallHeading = styled.div`
  user-select: none;
  cursor: default;
  ${props => `
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    color: ${props.color};
    margin: ${props.margin};
    ${props.padding && `padding: ${props.padding};`};
  `};
`

const SmallHeading = ({
  text = 'Small Heading',
  color,
  overrides,
  userOverrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = { 
    fontSize: getFontSize({overrides, userOverrides}, globals), 
    fontWeight: globals.smallHeading.fontWeight,
    textTransform: globals.smallHeading.textTransform,
    margin: globals.smallHeading.margin,
    color,
    ...overrides,
    ...userOverrides
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

export function getFontSize(props, globals) {
  const fontSize = getSafeFromObjects([props.userOverrides, props.overrides], 'fontSize', null)
  return fontSize || (globals || props.getGlobals()).smallHeading.fontSize;
}