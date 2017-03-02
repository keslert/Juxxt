import React from 'react';
import { _DisplayFlex } from '../../common/styled-base';
const SectionContainer = ({
  children,
  userOverrides,
  getGlobals,
}) => {
  const globals = getGlobals();

  const props = {
    maxWidth: globals.maxPageWidth,
    direction: 'column',
    justify: 'center',
    align: 'center',
  }

  return (
    <_DisplayFlex {...props}>
      {children}
    </_DisplayFlex>
  )
}
export default SectionContainer;