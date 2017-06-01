import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Image = styled.img`
  ${props => `
    ${props.height && `height: ${props.height};`}
    ${props.width && `width: ${props.width};`}
    ${props.margin && `margin: ${props.margin};`}
    ${props.borderRadius && `borderRadius: ${props.borderRadius};`}
    ${props.boxShadow && `box-shadow: ${props.boxShadow};`}
  `}
`

const Image = ({props, content}) => {
  return (
    <_Image {...props} src={content.src} />
  )
}

export const defaultProps = ({palette, globals}) => ({
  
})

export const modifiableProps = {
  borderRadius: true,
  boxShadow: true,
  aspectRatio: [
    'Auto', '1x1', 
    '16x9', '9x16', 
    '4x3', '3x4'
  ]
}

export default Image;