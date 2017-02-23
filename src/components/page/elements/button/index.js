import React, { PropTypes } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import Icon from '../icon';

const _Float = styled.span`
  float: ${props => props.direction}
`

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

    ${props.width && `width: ${props.width}px;`};
  `};
  &:hover {
    background: ${props => tinycolor(props.background).lighten(5).toString()};
  }
  i { margin: 0 5px; };
`

const getBorderRadius = ({type}, height) => {
  if(type === 'Rounded' || type === 'Shadow') {
    return height / 6;
  } else if(type === 'Round') {
    return height / 2;
  }
  return 0;
}

const getFontSize = ({type, size}) => {
  let fSize = 12;
  if(size === 'Large') {
    fSize *= 1.2;
  } else if(size === 'Small') {
    fSize *= 0.8;
  } else if(size === 'Tiny') {
    fSize *= 0.7;
  }
  return fSize;
}

const getBoxShadow = ({type, background}) => {
  if(type === 'Shadow') {
    return `0 4px 0 ${tinycolor(background).darken(20).toString()}`;
  }
  return 'none';
}

const Button = ({
  text = "Button",
  color,
  background,
  requirements,
  overrides = {},
}) => {

  const props = { 
    text, 
    color, 
    background, 
    ...requirements,
  };

  const fontSize = getFontSize(props);
  
  const padTB = overrides.padTB || fontSize;
  const padLR = overrides.padLR || fontSize * 4;
  const padding = `${padTB}px ${padLR}px`;
  
  const _height = padTB * 2 + fontSize;
  const borderRadius = getBorderRadius(props, _height);
  const boxShadow = getBoxShadow(props);

  const finalProps = { ...props, borderRadius, boxShadow, fontSize, padding, ...overrides };
  
  return (
    <_Button {...finalProps} className="element">
      {text}
    </_Button>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
}

export default Button;


export const requirements = {
  type: {
    options: ['Rounded', 'Round', 'Square', 'Shadow'],
    consistent: true,
  },
  size: {
    options: ['Large', 'Medium', 'Small', 'Tiny'],
    default: 'Medium',
    consistent: true,
  },
  icon: {
    options: ['None'], //, 'Left', 'Right'],
  },
}

export const params = {
  fontSize: 12,
  padTB: 12,
  padLR: 48,
  boxShadow: true,
  minWidth: true,
  background: true,
  color: true,
  textTransform: true,
}