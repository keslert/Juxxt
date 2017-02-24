import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.span`
  ${props => `
    color: ${props.color};  
    fontSize: ${props.fontSize};
  `}
`

const Icon = ({
  color,
  fontSize,
  type = 'rocket',
  overrides,
  getGlobals,
}) => {
  const props = {
    color,
    fontSize: fontSize || 'inherit',
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