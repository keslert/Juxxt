import React, { PropTypes } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const _Button = styled.span`
  margin-top: -2px;
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
  boxShadow,
  buttonStyle,
  color,
  fontSize,
  minWidth,
  padTB,
  padLR,
  overrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const _buttonStyle = buttonStyle || globals.buttonStyle;
  const _fontSize = fontSize || globals.fontSize;
  const _padTB = overrides.padTB || padTB || _fontSize;
  const _padLR = overrides.padLR || padLR || _fontSize * 4;
  const padding = `${_padTB}px ${_padLR}px`;

  const borderBottom = getBorderBottom(_buttonStyle, background);
  const borderRadius = getBorderRadius(_buttonStyle, _padTB * 2 + _fontSize);

  const props = { 
    background,
    borderBottom,
    borderRadius,
    boxShadow,
    color,
    fontSize: _fontSize, 
    minWidth,
    padding,
    ...overrides,
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
  padTB: PropTypes.number,
  padLR: PropTypes.number,
  overrides: PropTypes.object,
  getGlobals: PropTypes.func,
}

export default Button;

export const requirements = {}

export const params = {
  fontSize: true,
  padTB: true,
  padLR: true,
  boxShadow: true,
  minWidth: true,
  background: true,
  color: true,
  textTransform: true,
  buttonStyle: ['Round', 'Rounded', 'Square', 'Raised']
}