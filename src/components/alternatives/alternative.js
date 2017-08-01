import React from 'react';
import styled from 'styled-components';
import IconButton from '../common/icon-button';
import PaletteSwatch from '../common/palette-swatch';
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

renderChange() {
  const {changes } =this.props;

  if(changes && changes.palette) {
    return <PaletteSwatch palette = {changes.palette} />
  }
  else{
    const label = getLabel(changes);
    return <StyledLabel>{label}</StyledLabel>
  }

}
  render() {
    const { changes, children, onFavorite, onDelete } = this.props;
    return (
      <StyledAlternative>
        <StyledHeading>
          {this.renderChange()}
          <StyledIconBar>
            <IconButton type="trash" onClick={onDelete} />
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