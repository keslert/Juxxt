import React from 'react';
import styled from 'styled-components';
const _ModalBody = styled.div`
  flex: 1;
  padding: 20px 40px;
  overflow: auto;
`;

const ModalBody = ({
  className,
  children,
  icon
}) => (
  <_ModalBody className={className}>
    {children}
  </_ModalBody>
)

export default ModalBody;