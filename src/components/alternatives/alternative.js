import React from 'react';
import styled from 'styled-components';
import IconButton from '../common/icon-button';
import { lowerCamelCaseToRegular } from '../../core/utils';
import { map, isObject } from 'lodash';

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

class Alternative extends React.PureComponent {

  render() {
    const { changes, children, onFavorite, onDelete } = this.props;

    const label = getLabel(changes);
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
}

export default Alternative;

function getLabel(obj) {
  return map(obj, (value, key) =>
    isObject(value) ? getLabel(value) : `${lowerCamelCaseToRegular(key)}: ${value}`
  ).join(', ');
}