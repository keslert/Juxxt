import React from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledDisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import SectionContainer from './section-container';

const BasicSection = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {
  return (
    <StyledDisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <Group {...groups.item} />
      </SectionContainer>
    </StyledDisplayFlex>
  )
}
export default BasicSection;

export const requirements = {
  groups: {
    item: {
      options: [],
    }
  }
}

export const defaultProps = ({section, globals}) => ({
  justify: 'center',
  background: section.palette.background,
  padding: globals.sections.padding,
})

export const modifiableProps = {
  padding: true,
  background: true,
}