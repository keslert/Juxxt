import React from 'react';
import Group from '../../groups';

import { _DisplayFlex } from '../../../common/styled-base';
import SectionContainer from '../section-container';


const CopyrightFooter = ({
  palette,
  requirements,
  userOverrides,
  getGlobals,
}) => {

  const globals = getGlobals();

  const props = {
    padding: globals.sectionPadding,
    justify: 'center',
    background: palette.background,
    ...userOverrides,
  }

  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...{getGlobals, userOverrides}}>
        <Group {...requirements.heading} palette={palette} />
      </SectionContainer>
    </_DisplayFlex>
  )
}

export default CopyrightFooter;

export const requirements = {
  heading: {
    type: 'Group',
    options: ['HeadingSubheading'],
  },
}

export const params = {

}