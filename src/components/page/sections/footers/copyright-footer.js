import React from 'react';
import Group from '../../groups';
import { _DisplayFlex } from '../../../common/styled-base';
import SectionContainer from '../section-container';

const CopyrightFooter = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {

  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <Group {...groups.heading} />
      </SectionContainer>
    </_DisplayFlex>
  )
}
export default CopyrightFooter;

export const requirements = {
  groups: {
    heading: {
      options: ['HeadingSubheading'],
    },
  }
}

export const defaultProps = ({section, globals}) => ({
  justify: 'center',
  background: section.palette.background,
  padding: globals.section.padding,
})

export const modifiableProps = {

}