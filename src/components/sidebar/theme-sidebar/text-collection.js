import React from 'react';
import Collection from '../common/collection';
import Select from '../common/select';

const TextCollection = ({
  open,
  onToggleOpen,
  locked,
  onToggleLocked,
}) => {
  const textOptions = [
    {value: 'montserrat', label: 'Montserrat'},
    {value: 'lato', label: 'Lato'},
  ];

  const textSize = [
    {value: '12', label: '12'},
    {value: '14', label: '14'},
  ];

  return (
    <Collection heading={"Text"} open={open} onToggleOpen={onToggleOpen} locked={locked} onToggleLocked={onToggleLocked}>
      <Select 
        name="text-font-family"
        label="Font Family"
        options={textOptions}
        value={textOptions[0].value}
        onChange={() => null}
        />

      <Select 
        name="text-font-size"
        label="Font Size"
        options={textSize}
        value={textSize[0].value}
        onChange={() => null}
        />
    </Collection>
  )
}
export default TextCollection;