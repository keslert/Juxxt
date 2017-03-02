import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.span`
  ${props => `
    color: ${props.color};  
    fontSize: ${props.fontSize}px;
    height: ${props.fontSize}px;
    margin: ${props.margin};
  `}
`

const Icon = ({
  color,
  fontSize,
  margin,
  type = 'rocket',
  overrides,
  getGlobals,
}) => {
  
  const globals = getGlobals();

  const props = {
    margin,
    color,
    fontSize: fontSize || globals.iconSize, 
    ...overrides,
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