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

const SmallHeading = (props) => ( 
  <_SmallHeading {...props}>{props.content.text}</_SmallHeading>
)
export default SmallHeading;

export const defaultProps = ({palette, globals}) => ({
  color: palette.textHighlight,
  fontFamily: globals.smallHeading.fontFamily,
  fontSize: globals.smallHeading.fontSize,
  fontWeight: globals.smallHeading.fontWeight,
  textTransform: globals.smallHeading.textTransform,
  margin: globals.smallHeading.margin,
})

export const modifiableProps = {
  color: true,
  fontWeight: true,
  fontSize: true,
  margin: true,
  padding: true,
  textTransform: true,
}

export function getFontSize({userOverrides}, globals) {
  return userOverrides.fontSize || globals.smallHeading.fontSize;
}