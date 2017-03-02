import React from 'react';
import styled from 'styled-components';
import { _DisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import SectionContainer from './section-container';

const FiftyFifty = ({
  palette,
  requirements, 
  userOverrides, 
  getGlobals,
}) => {

  const globals = getGlobals();
  const props = {
    justify: 'center',
    align: 'center',
    background: palette.background,
    padding: globals.sectionPadding,
    ...userOverrides
  }

  const innerProps = {
    padding: '0 30px',
    justify: 'center',
    align: 'center',
    flex: 1,
  }

  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...{getGlobals, userOverrides}}>
        <_DisplayFlex>
          <_DisplayFlex {...innerProps}>
            <Group {...requirements.group} palette={palette} />
          </_DisplayFlex>
          <_DisplayFlex {...innerProps}>
            <Group {...requirements.group} palette={palette} />
          </_DisplayFlex>
        </_DisplayFlex>
      </SectionContainer>
    </_DisplayFlex>
  )
}
export default FiftyFifty;

export const requirements = {
  group: {
    type: 'Group',
    options: ['IconHeadingParagraph'],
  },
}

export const params = {
  padding: true,
}