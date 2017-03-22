import React from 'react';
import styled from 'styled-components';

const _Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }
`

const BackgroundImage = ({
  src,
  filter,
}) => (
  <_Image className={filter}>
    <img src={src} />
  </_Image>
)

export default BackgroundImage;