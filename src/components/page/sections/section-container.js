import React from 'react';
import { StyledDisplayFlex } from '../../common/styled-base';
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
    <StyledDisplayFlex {...props} className="section-container">
      {children}
    </StyledDisplayFlex>
  )
}
export default SectionContainer;