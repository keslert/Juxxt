import React, { PropTypes } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';


const _Button = styled.span`
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  ${props => `
    padding: ${props.padding};
    background: ${props.background};
    color: ${props.color};
    border-radius: ${props.borderRadius}px;
    font-size: ${props.fontSize}px;
    text-transform: ${props.textTransform};
    box-shadow: ${props.boxShadow};
    display: ${props.block ? 'block' : 'inline-block'};
    borderBottom: ${props.borderBottom};

    ${props.margin && `margin: ${props.margin};`};
    ${props.minWidth && `min-width: ${props.minWidth}px;`};
  `};
  &:hover {
    background: ${props => tinycolor(props.background).lighten(5).toString()};
  }
`

const Button = ({props, content}) => (
  <_Button {...props} className="element">
    {content.text}
  </_Button>
)
export default Button;

export const defaultProps = ({palette, globals}, overwrites) => {
  const type = overwrites.type || globals.button.type;
  const fontSize = overwrites.fontSize || globals.fontSize;
  return {
    background: palette.button.background,
    borderBottom: getBorderBottom(type, palette.button.background),
    borderRadius: getBorderRadius(type, fontSize * 4),
    textTransform: globals.button.textTransform,
    color: palette.button.color,
    fontSize: globals.fontSize,
    padding: `${fontSize}px ${fontSize * 4}px`,
  }
}


export const modifiableProps = {
  fontSize: true,
  padding: true,
  boxShadow: true,
  minWidth: true,
  background: true,
  color: true,
  textTransform: true,
  type: ['Round', 'Rounded', 'Square', 'Raised'],
}

const getBorderRadius = (type, height) => {
  if(type === 'Rounded' || type === 'Raised') {
    return height / 6;
  } else if(type === 'Round') {
    return height / 2;
  }
  return 0;
}

const getBorderBottom = (type, background) => {
  if(type === 'Raised') {
    return `4px solid ${tinycolor(background).darken(20).toString()}`;
  }
  return 'none';
}