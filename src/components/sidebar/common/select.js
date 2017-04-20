import React from 'react';
import { StyledField, StyledInputWrapper } from './styled';
import RSelect from 'react-select';

const Select = ({
  name,
  label,
  options,
  value,
  onChange,
}) => (
  <StyledField>
    <label>{label}</label>
    <StyledInputWrapper>
      <RSelect name={name} value={value} options={options} onChange={onChange} clearable={false} />
    </StyledInputWrapper>
  </StyledField>
)
export default Select;