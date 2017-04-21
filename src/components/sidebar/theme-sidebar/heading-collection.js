import React from 'react';
import Collection from '../common/collection';
import Select from '../common/select';

const HeadingCollection = ({
  open,
}) => {
  const fontOptions = [
    {value: 'montserrat', label: 'Montserrat'},
    {value: 'lato', label: 'Lato'},
  ];
  const sizeOptions = [
    {value: '12', label: '12'},
    {value: '14', label: '14'},
  ];

  return (
    <Collection heading={"Heading"} open={open}>
      <Select 
        name="text-font-family"
        label="Font Family"
        options={fontOptions}
        value={fontOptions[0].value}
        onChange={() => null}
        />

      <Select 
        name="text-font-size"
        label="Font Size"
        options={sizeOptions}
        value={sizeOptions[0].value}
        onChange={() => null}
        />
    </Collection>
  )
}
export default HeadingCollection;