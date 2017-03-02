import React, { PropTypes } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import { getSafeFromObjects } from '../../../../core/utils';

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
    ${props.width && `width: ${props.width}px;`};
  `};
  &:hover {
    background: ${props => tinycolor(props.background).lighten(5).toString()};
  }
`

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

const Button = ({
  text = "Button",
  background,
  color,
  overrides,
  userOverrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const buttonStyle = getSafeFromObjects([userOverrides, overrides], 'buttonStyle', globals.buttonStyle);
  const fontSize = getSafeFromObjects([userOverrides, overrides], 'fontSize', globals.fontSize);
  
  const props = { 
    background,
    borderBottom: getBorderBottom(buttonStyle, background),
    borderRadius: getBorderRadius(buttonStyle, fontSize * 2),
    color,
    fontSize, 
    padding: `${fontSize}px ${fontSize * 4}px`,
    ...overrides,
    ...userOverrides,
  };

  
  return (
    <_Button {...props} className="element">
      {text}
    </_Button>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  boxShadow: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  minWidth: PropTypes.number,
  padding: PropTypes.string,
  userOverrides: PropTypes.object,
  getGlobals: PropTypes.func,
}

export default Button;

export const requirements = {}

export const params = {
  fontSize: true,
  padding: true,
  boxShadow: true,
  minWidth: true,
  background: true,
  color: true,
  textTransform: true,
  buttonStyle: ['Round', 'Rounded', 'Square', 'Raised']
}