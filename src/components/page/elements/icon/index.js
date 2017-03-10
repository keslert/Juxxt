import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.span`
  display: inline-block;
  ${props => `
    color: ${props.color};  
    fontSize: ${props.fontSize}px;
    height: ${props.height || props.fontSize}px;
    ${props.margin && `margin: ${props.margin};`}
    img { height: 100% }; 
  `}
`

const Icon = (props) => ( 
  <_Icon {...props} className="element">
    {props.content.src
      ? <img src={props.content.src} />
      : <i className={`fa fa-${props.content.type}`}></i>
    }
  </_Icon>
)
export default Icon;

export const defaultProps = ({palette, globals}) => ({
  color: palette.icon,
  fontSize: globals.iconSize,
})

export const modifiableProps = {
  color: true,
  fontSize: true,
  margin: true,
  src: true,
  type: true,
  height: true,
}