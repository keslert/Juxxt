import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { getSafeFromObjects } from '../../../../core/utils';

const _SmallHeading = styled.div`
  user-select: none;
  cursor: default;
  ${props => `
    font-family: ${props.fontFamily};
    font-size: ${props.fontSize}px;
    font-weight: ${props.fontWeight};
    text-transform: ${props.textTransform};
    color: ${props.color};
    margin: ${props.margin};
    ${props.padding && `padding: ${props.padding};`};
  `};
`

const SmallHeading = ({props, content}) => ( 
  <_SmallHeading {...props}>{content.text}</_SmallHeading>
)
export default SmallHeading;

export const defaultProps = ({palette, globals}) => ({
  color: palette.textHighlight,
  fontFamily: globals.smallHeadings.fontFamily,
  fontSize: globals.smallHeadings.fontSize,
  fontWeight: globals.smallHeadings.fontWeight,
  textTransform: globals.smallHeadings.textTransform,
  margin: globals.smallHeadings.margin,
})

export const modifiableProps = {
  color: true,
  fontWeight: true,
  fontSize: true,
  margin: true,
  padding: true,
  textTransform: true,
  text: true,
}

export function getFontSize({userOverwrites}, globals) {
  return userOverwrites.fontSize || globals.smallHeadings.fontSize;
}