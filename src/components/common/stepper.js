import React from 'react';
import styled from 'styled-components';

const StyledStepper = styled.div`
  display: flex;
  background: #1d1d1d;
  color: #727272;
  border-radius: 5px;
  overflow: hidden;
`
const StyledButton = styled.div`
  padding: 6px 6px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`

const StyledLabel = styled.div`
  padding: 6px 6px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
`

const Stepper = ({
  label,
  onIncrement,
  onDecrement,
}) => (
  <StyledStepper>
    <StyledButton onClick={onDecrement}>
      <i className="fa fa-search-minus"></i>
    </StyledButton>
    <StyledLabel>{label}</StyledLabel>
    <StyledButton onClick={onIncrement}><i className="fa fa-search-plus" /></StyledButton>
  </StyledStepper>
)

export default Stepper;