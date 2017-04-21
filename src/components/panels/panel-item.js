import React from 'react';
import styled from 'styled-components';
import Input from './forms/input';
import MarginPaddingInput from './forms/margin-padding-input';

import { StyledFlex, StyledDisplayFlex } from '../common/styled-base';
import { _Label } from './forms/styled-form';
import { lowerCamelCaseToRegular } from '../../core/utils';


const _PanelItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`

const PanelItem = ({
  value,
  options,
  name,
  onChange,
}) => {


  const getItem = () => {
    switch(name) {
      case 'color':
      case 'background':
      case 'type':
      case 'text':
        return <Input value={value} onChange={onChange} label={lowerCamelCaseToRegular(name)} />
      case 'margin':
      case 'padding':
        return <MarginPaddingInput value={value} onChange={onChange} label={lowerCamelCaseToRegular(name)} />
      case 'fontSize':
        return <Input value={value} onChange={onChange} label='px' />
      default:
        return <div>Unknown Panel Item</div>
    }
  }

  return (
    <_PanelItem>
      <_Label>{lowerCamelCaseToRegular(name)}</_Label>
      <StyledFlex>{getItem()}</StyledFlex>
    </_PanelItem>
  )


}

export default PanelItem;