import React from 'react';
import styled from 'styled-components';
import IconButton from '../common/icon-button';

const StyledAlternative = styled.div`
  margin-bottom: 10px;
`

const StyledIconBar = styled.div`
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
    <StyledAlternative>
      <StyledIconBar>
        <IconButton type="heart" onClick={onFavorite} />
        <IconButton type="trash-o" onClick={onDelete} />
      </StyledIconBar>
      {children}
    </StyledAlternative>
  )
}

export default Alternative;