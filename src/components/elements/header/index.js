import React, { PropTypes } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import Icon from '../icon';

const styling = props => `
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  text-transform: ${props.textTransform};
  color: ${props.color};
`
const _H1 = styled.h1` ${styling} `;
const _H2 = styled.h2` ${styling} `;
const _H3 = styled.h3` ${styling} `;
const _H4 = styled.h4` ${styling} `;
const _H5 = styled.h5` ${styling} `;
const _H6 = styled.h6` ${styling} `;


const getFontSize = (importance) => {
  const baseFontSize = 15;
  switch(importance) {
    case 'h1':
      return baseFontSize * 3.333;
    case 'h2':
      return baseFontSize * 2.8;
    case 'h3':
      return baseFontSize * 2.4;
    case 'h4':
      return baseFontSize * 2.0;
    case 'h5':
      return baseFontSize * 1.6;
    case 'h6':
      return baseFontSize;
  }
}

const Header = ({
  text = 'Header Material!',
  color,
  fontWeight,
  requirements,
  overrides,
}) => {

  const { importance } = requirements;

  const fontSize = getFontSize(importance);

  const props = { fontSize, fontWeight, color, ...overrides}

  switch(importance) {
    case 'h1': return <_H1 {...props}>{text}</_H1>;
    case 'h2': return <_H2 {...props}>{text}</_H2>;
    case 'h3': return <_H3 {...props}>{text}</_H3>;
    case 'h4': return <_H4 {...props}>{text}</_H4>;
    case 'h5': return <_H5 {...props}>{text}</_H5>;
    case 'h6': return <_H6 {...props}>{text}</_H6>; 
  }
}

export default Header;

export const requirements = {
  importance: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
}

export const params = {
  color: true,
  textTransform: true,
  fontWeight: true,
}
