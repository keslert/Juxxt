import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import SectionContainer from './section-container';

const BasicSection = ({
  requirements, 
  palette, 
  userOverrides,
  getGlobals,
}) => {
  const globals = getGlobals();
  const props = { 
    justify: 'center',
    padding: globals.sectionPadding, 
    background: palette.background, 
    ...userOverrides
  }

  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...{getGlobals, userOverrides}}>
        <Group {...requirements.group} palette={palette} />
      </SectionContainer>
    </_DisplayFlex>
  )
}
export default BasicSection;

export const requirements = {
  group: {
    type: 'Group',
    options: [],
  }
}

export const params = {
  padding: true,
  background: true,
}