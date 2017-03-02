import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { getSafeFromObjects } from '../../../../core/utils';

const _Heading = styled.div`
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

const Heading = ({
  text = 'Heading',
  color,
  overrides,
  userOverrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = { 
    fontSize: getFontSize({overrides, userOverrides}, globals),
    fontWeight: globals.heading.fontWeight,
    textTransform: globals.heading.textTransform,
    margin: globals.heading.margin,
    color,
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Heading {...props}>{text}</_Heading>
  )
}

export default Heading;

export const requirements = {}

export const params = {
  color: true,
  textTransform: true,
  fontWeight: true,
  fontSize: true,
}

export function getFontSize(props, globals) {
  const fontSize = getSafeFromObjects([props.userOverrides, props.overrides], 'fontSize', null)
  return fontSize || (globals || props.getGlobals()).heading.fontSize;
}