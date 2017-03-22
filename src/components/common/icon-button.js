import React from 'react';
import styled from 'styled-components';

const _IconButton = styled.span`
  cursor: pointer;
  i:first-child {
    color: transparent;
    transition: color 0.3s;
  }
  &:hover {
    i:first-child {
      color: rgba(255,255,255,0.3);
    }
  }
`

const IconButton = ({
  type,
  onClick,
}) => (
  <_IconButton onClick={onClick} className="fa-stack">
    <i className="fa fa-circle fa-stack-2x"></i>
    <i className={`fa fa-${type} fa-stack-1x fa-inverse`}></i>
  </_IconButton>
)
export default IconButton;