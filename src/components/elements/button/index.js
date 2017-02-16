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

    ${props.width && `width: ${props.width}px;`}
    ${props.block || props.width && 'display: block'};
    &:hover {
      background: ${tinycolor(props.background).lighten(5).toString()};
    }
  `}
  i { margin: 0 5px; }
`


export const variations = {
  type: {
    options: ['Rounded', 'Round', 'Square', 'Shadow'],
    consistent: true,
  },
  size: {
    options: ['Large', 'Medium', 'Small', 'Tiny'],
    default: 'Medium',
  },
  icon: {
    options: ['None', 'Left', 'Right'],
  },
}



// Tweaks
const defaultNudges = {
  padding: { // What are the rules for good padding for buttons?
    func: ({w, h}) => ({w, h: Math.min(w/2, w)})
  },
  boxShadow: {
    optional: true,
  },
  width: {
    optional: true
  },
  background: true,
  color: true,
  textTransform: true,
}

const getBorderRadius = (type, height) => {
  if(type === 'Rounded' || type === 'Shadow') {
    return height / 6;
  } else if(type === 'Round') {
    return height / 2;
  }
  return 0;
}

const getFontSize = (type, size) => {
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

const getBoxShadow = (type, background) => {
  if(type === 'Shadow') {
    return `0 4px 0 ${tinycolor(background).darken(20).toString()}`;
  }
  return 'none';
}

const Button = ({
  text,
  type,
  icon,
  size,
  background,
  color,
  overrides = {},
}) => {

  const fontSize = getFontSize(type, size);
  
  const padTB = overrides.padTB || fontSize;
  const padLR = overrides.padLR || fontSize * 4;
  const padding = `${padTB}px ${padLR}px`;
  
  const _height = padTB * 2 + fontSize;
  const borderRadius = getBorderRadius(type, _height);
  const boxShadow = getBoxShadow(type, background);

  const props = { background, color, borderRadius, boxShadow, fontSize, padding, ...overrides };
  return (
    <_Button {...props}>
      {icon === 'Left' ? <i className="fa fa-rocket"></i> : null}
      {text || "Button"}
      {icon === 'Right' ? <i className="fa fa-rocket"></i> : null}
    </_Button>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
}

export default Button;


// Shake
// Poke
// and Nudge
// your way to good design

// The goal is to allow for 90% control

// The extreme change bot, treats locks as a soft constraint

// Once you have a button style, it shouldn't need to change...

// Variations are not random. They are ordered by likelihood. This maintains the order when cycling back and forth through them.