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
  content,
  overrides,
  userOverrides,
  getGlobals,
}) => {
  
  const globals = getGlobals();

  const props = {
    color,
    fontSize: globals.iconSize,
    ...content,
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Icon {...props }>
      {props.src
        ? <img src={props.src} />
        : <i className={`fa fa-${props.type}`}></i>
      }
    </_Icon>
  )
}

export const requirements = {}

export const params = {
  color: true,
  fontSize: true,
  margin: true,
  src: true,
  type: true,
}

export default Icon;