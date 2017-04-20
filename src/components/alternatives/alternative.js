import React from 'react';
import styled from 'styled-components';
import IconButton from '../common/icon-button';

const _Alternative = styled.div`
  margin-bottom: 10px;
`

const _IconBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;
`

const Alternative = ({
  children,
  onFavorite,
  onDelete,
}) => {

  return (
    <_Alternative>
      <_IconBar>
        <IconButton type="heart" onClick={onFavorite} />
        <IconButton type="trash-o" onClick={onDelete} />
      </_IconBar>
      {children}
    </_Alternative>
  )
}

export default Alternative;