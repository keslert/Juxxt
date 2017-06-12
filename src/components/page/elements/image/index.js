import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

const _Image = styled.img`
  
`

const BGImage = styled.span`
  background: url(${props => props.src});

`

const Image = ({
  content,
  style, 
  color,
}) => {

  const classNames = convertStyleToAtomic(style);

  if(style.aspectRatio !== 'auto') {
    return <div className={classNames + ' bg-center cover w-100P'}
                style={{backgroundImage: `url(${content.src})`}} />
  }

  return (
    <img src={content.src} className={classNames} />
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