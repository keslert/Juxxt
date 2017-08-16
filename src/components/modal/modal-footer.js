import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../common/styled-base';
import Box from '../common/box';

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  background: #1d1d1d;
  // border-top: 1px solid #f1f1f1;
`

const StyledCancel = styled(StyledButton)`
  color: #808080;
  padding: 8px;
  &:hover {
    color: #999;
  }
`

const ModalFooter = ({
  children,
  onCancel
}) => (
  <StyledModalFooter>
    <Box>
      <StyledCancel onClick={onCancel}>Cancel</StyledCancel>
    </Box>
    <Box>
      {children}
    </Box>
  </StyledModalFooter>
)

export default ModalFooter;