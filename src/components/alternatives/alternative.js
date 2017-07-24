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
  color: #202020;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledShadow = styled.div`
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

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
        </StyledIconBar>
      </StyledHeading>
      <StyledShadow>
        {children}
      </StyledShadow>
    </StyledAlternative>
  )
}

export default Alternative;