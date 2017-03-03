import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.span`
  display: inline-block;
  ${props => `
    color: ${props.color};  
    fontSize: ${props.fontSize}px;
    height: ${props.fontSize}px;
    ${props.margin && `margin: ${props.margin};`}
    img { height: 100% }; 
  `}
`

const Icon = ({
  color,
  src = 'https://image.flaticon.com/icons/svg/138/138773.svg',
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
      {src
        ? <img src={src} />
        : <i className={`fa fa-${type}`}></i>
      }
    </_Icon>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
  margin: true,
}

export default Icon;