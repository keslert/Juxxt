import React from 'react';
import styled from 'styled-components';
import Collection from '../common/collection';
import { StyledField } from '../common/styled';
import { lowerCamelCaseToRegular } from '../../../core/utils';
import { StyledSpacer } from '../../common/styled-base';

const StyledColumn = styled.div`
  width: calc(50% - 5px);
  display: inline-block;
  &:nth-child(1) {
    margin-right: 5px;
  }
  &:nth-child(2) {
    margin-left: 5px;
  }
`;

const StyledPixel = styled.div`
  border-radius: 2px;
  background: ${props => props.color};
  box-shadow: inset 0 -2px 3px rgba(0,0,0,.5);
  width: 28px;
  height: 14px;
`;

function renderColumn(colors) {
  return (
    <StyledColumn>
      {colors.map(color => (
        <StyledSpacer key={color.key} marginBottom="5px">
          <StyledField>
            <label>{lowerCamelCaseToRegular(color.key)}</label>
            <StyledPixel color={color.value} />
          </StyledField>
        </StyledSpacer>
      ))}
    </StyledColumn>
  )
}

const BrandColorsCollection = ({
  open,
  onToggleOpen,
  locked,
  onToggleLocked
}) => {
  const colors = [
    {key: 'primary', value: '#3ECF8E'},
    {key: 'secondary', value: '#6772e5'},
    {key: 'text', value: '#6b7c93'},
    {key: 'textOnDark', value: '#c4f0ff'},
    {key: 'dark', value: '#32325D'},
    {key: 'offDark', value: '#43458B'},
    {key: 'light', value: '#fff'},
    {key: 'offLight', value: '#F6F9FC'},
  ];
  const half = Math.ceil(colors.length / 2);
  return (
    <Collection heading={"Brand Colors"} open={open} onToggleOpen={onToggleOpen} locked={locked} onToggleLocked={onToggleLocked}>
      <div>
        {renderColumn(colors.slice(0, half))}
        {renderColumn(colors.slice(half))}
      </div>
    </Collection>
  )
}
export default BrandColorsCollection;