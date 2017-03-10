import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import SectionContainer from './section-container';

const BasicSection = ({
  sectionContainer,
  groups, 
  variation,
  props,
}) => {
  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <Group {...groups.group} />
      </SectionContainer>
    </_DisplayFlex>
  )
}
export default BasicSection;

export const requirements = {
  groups: {
    group: {
      options: [],
    }
  }
}

export const defaultProps = ({palette, globals}) => ({
  justify: 'center',
  background: palette.background,
  padding: globals.section.padding,
})

export const modifiableProps = {
  padding: true,
  background: true,
}