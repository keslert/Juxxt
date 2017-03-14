import React from 'react';
import Input from './forms/input';
import MarginPaddingInput from './forms/margin-padding-input';

const PanelItem = ({
  value,
  options,
  name,
  onChange,
}) => {

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

export default PanelItem;