import React from 'react';
import Input from './forms/input';
import MarginPaddingInput from './forms/margin-padding-input';

import { _Flex, _DisplayFlex } from '../common/styled-base';
import { _Label } from './forms/styled-form';

const PanelItem = ({
  value,
  options,
  name,
  onChange,
}) => {


  const getItem = () => {
    switch(name) {
      case 'text': 
        return <Input value={value} onChange={onChange} label={name} />
      case 'margin':
      case 'padding':
        return <MarginPaddingInput value={value} onChange={onChange} label={name} />
      default:
        return <div>Unknown Panel Item</div>
    }
  }

  return (
    <_DisplayFlex>
      <_Label>{name}</_Label>
      <_Flex>{getItem()}</_Flex>
    </_DisplayFlex>
  )


}

export default PanelItem;