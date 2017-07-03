import React from 'react';
import styled from 'styled-components';
import { StyledField, StyledInputWrapper } from './styled';
import Textarea from 'react-textarea-autosize';


const StyledTextArea = styled.div`
  textarea {
    font-size: 12px;
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: none;
    border-radius: 2px;
    color: rgba(255,255,255,0.8);
    padding: 4px;
    outline: none;
    resize: none;
  }
`

const TextArea = ({
  name,
  label,
  value,
  onChange,
}) => (
  <StyledField>
    <label>{label}</label>
    <StyledInputWrapper>
      <StyledTextArea>
        <Textarea name={name} onChange={(e) => onChange(e.target.value)} value={value} />
      </StyledTextArea>
    </StyledInputWrapper>
  </StyledField>
)
export default TextArea;