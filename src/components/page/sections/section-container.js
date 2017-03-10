import React from 'react';
import { _DisplayFlex } from '../../common/styled-base';
const SectionContainer = ({
  align = 'center',
  justify = 'center',
  maxWidth,
  children,
}) => {

  const props = {
    maxWidth,
    flexDirection: 'column',
    justify,
    align,
    widthPercentage: 100,
    flex: 1,
  }

  return (
    <_DisplayFlex {...props} className="section-container">
      {children}
    </_DisplayFlex>
  )
}
export default SectionContainer;