import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Link = styled.p`
  user-select: none;
  cursor: pointer;
  ${props => `
    color: ${props.color};
    font-size: ${props.fontSize};
    ${props.margin && `margin: ${props.margin};`};
    ${props.padding && `padding: ${props.padding};`};
  `}
`

const Link = (props) => (
  <_Link {...props}>
    {props.content.text}
  </_Link>
)
export default Link;

export const defaultProps = ({palette, globals}) => ({
  color: palette.link,
  fontSize: globals.fontSize,
})

export const modifiableProps = {
  color: true,
  fontSize: true,
  margin: true,
  padding: true,
}

