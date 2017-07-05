import React from 'react';
import styled from 'styled-components';
import IconButton from '../common/icon-button';
import { lowerCamelCaseToRegular } from '../../core/utils';
import { map } from 'lodash';

const StyledAlternative = styled.div`
  margin-bottom: 10px;
`;

const StyledIconBar = styled.div`
  flex: 1;
  text-align: right;
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 24px;
`;

const StyledLabel = styled.div`
  font-size: 12px;
  color: rgba(255,255,255,0.3);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Alternative = ({
  changes,
  children,
  onFavorite,
  onDelete,
}) => {

  const label = map(changes, (value, key) => `${lowerCamelCaseToRegular(key)}: ${value}`).join(', ');
  return (
    <StyledAlternative>
      <StyledHeading>
        <StyledLabel>{label}</StyledLabel>
        <StyledIconBar>
          <IconButton type="heart" onClick={onFavorite} />
          <IconButton type="trash-o" onClick={onDelete} />
        </StyledIconBar>
      </StyledHeading>
      {children}
    </StyledAlternative>
  )
}

export default Alternative;