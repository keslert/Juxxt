import React from 'react';
import Group from '../../groups';
import { _DisplayFlex } from '../../../common/styled-base';
import SectionContainer from '../section-container';

const LinkFooter = ({
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
export default LinkFooter;

export const requirements = {
  groups: {
    list: {
      options: ['HeadingSubheading'],
    },
  },
  variations: [{

  }]
}

export const defaultProps = ({palette, globals}) => ({
  justify: 'center',
  background: palette.background,
  padding: globals.section.padding,
})

export const modifiableProps = {

}