import React from 'react';
import { StyledField, StyledInputWrapper } from './styled';
import RSelect from 'react-select';
import Box from '../../common/box';
const Select = ({
  name,
  label,
  options,
  value,
  onChange,
}) => (
  <Box width="120px">
    <RSelect 
      name={name} 
      value={value} 
      options={options} 
      onChange={onChange} 
      clearable={false}
      searchable={false} />
  </Box>
)
export default Select;