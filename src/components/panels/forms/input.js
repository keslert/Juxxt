import React from 'react';
import styled from 'styled-components';
import { _DisplayFlex, _Flex } from '../../common/styled-base';
import { _Label, _Input } from './styled-form';

const Input = ({
  label,
  value,
  onChange,
}) => (
  <_DisplayFlex>
    <_Label>{label}</_Label>
    <_Flex>
      <_Input value={value || ''} onChange={(e) => onChange(e.target.value)} />
    </_Flex>
  </_DisplayFlex>
)

export default Input;