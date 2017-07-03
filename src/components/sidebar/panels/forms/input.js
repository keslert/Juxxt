import React from 'react';
import styled from 'styled-components';
import { StyledDisplayFlex, StyledFlex } from '../../common/styled-base';
import { _Subscript, _Input } from './styled-form';

const Input = ({
  type='text',
  label,
  value='',
  onChange,
}) => (
  <StyledDisplayFlex flexDirection="column" align="center">
    <_Input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    <_Subscript>{label}</_Subscript>
  </StyledDisplayFlex>
)

export default Input;