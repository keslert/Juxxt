import React from 'react';
import Input from './forms/input';


const PanelItem = ({
  value,
  options,
  name,
  onChange,
}) => {
  switch(name) {
    case 'text': 
      return <Input value={value} onChange={onChange} label={name} />
    default:
      return <div>Unknown Panel Item</div>
  }
}

export default PanelItem;