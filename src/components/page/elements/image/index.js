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

const Image = (props) => {
  return (
    <_Image {...props} src={props.content.src} />
  )
}

export const defaultProps = ({palette, globals}) => ({
  
})

export const modifiableProps = {
  width: true,
  height: true,
  margin: true,
  borderRadius: true,
  boxShadow: true,
}

export default Image;