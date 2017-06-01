import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Text = styled.p`
  user-select: none;
  cursor: default;
  ${props => `
    color: ${props.color};
    font-size: ${props.fontSize}px;  
    ${props.margin && `margin: ${props.margin};`};
    ${props.padding && `padding: ${props.padding};`};
  `}
`

const Text = ({props, content}) => (
  <_Text {...props}>
    {content.text}
  </_Text>
)
export default Text;

// export const defaultProps = ({palette, globals}) => ({
//   color: palette.text,
//   fontSize: globals.text.fontSize,
// })

// export const modifiableProps = {
//   color: true,
//   fontSize: true,
//   margin: true,
//   padding: true,
//   text: true,
// }