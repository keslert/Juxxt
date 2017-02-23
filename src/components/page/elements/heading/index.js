import React, { PropTypes } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import Icon from '../icon';



const _Heading = styled.div`
  ${props => `
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    color: ${props.color};
  `};
`

const getFontSize = ({size}) => {
  switch(size) {
    case 'Large':
      return params.fontSize * 2.4;
    case 'Medium':
      return params.fontSize * 1.6;
    case 'Small':
      return params.fontSize;
  }
}

const Heading = ({
  text = 'Heading',
  color,
  requirements,
  overrides,
}) => {
  const fontSize = getFontSize(requirements);
  const props = { fontSize, color, 
    textTransform: requirements.textTransform,
    fontWeight: requirements.fontWeight,
    ...overrides}

  return (
    <_Heading {...props}>{text}</_Heading>
  )
}

export default Heading;

export const requirements = {
  size: {
    options: ['Large', 'Medium', 'Small'],
  },
  textTransform: {
    options: ['none', 'uppercase'],
    consistent: true,
  },
  fontWeight: {
    options: ['light', 'normal', 'bold'],
    consistent: true,
  },
}

export const params = {
  color: true,
  textTransform: true,
  fontWeight: true,
  fontSize: 28,
}
