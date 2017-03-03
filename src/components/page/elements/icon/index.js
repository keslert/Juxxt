import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.span`
  display: inline-block;
  ${props => `
    color: ${props.color};  
    fontSize: ${props.fontSize}px;
    height: ${props.fontSize}px;
    ${props.margin && `margin: ${props.margin};`}
  `}
`

const Icon = ({
  color,
  type = 'rocket',
  overrides,
  userOverrides,
  getGlobals,
}) => {
  
  const globals = getGlobals();

  const props = {
    color,
    fontSize: globals.iconSize,
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Icon {...props }>
      <i className={`fa fa-${type}`}></i>
    </_Icon>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
}

export default Icon;