import React from 'react';
import Group from '../../groups';
import { _DisplayFlex, _Flex } from '../../../common/styled-base';
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
        <_DisplayFlex widthPercentage='100' justify='space-between'>
          {groups.list.clones.map(list => 
            <_Flex key={list.uuid}>
              <Group {...list} />
            </_Flex>
          )}
        </_DisplayFlex>
      </SectionContainer>
    </_DisplayFlex>
  )
}
export default LinkFooter;

export const requirements = {
  groups: {
    list: {
      options: ['SmallHeadingLinkList'],
      overwrites: ({variation, globals}) => ({
        padding: '0 20px',
      }),
      copies: 'lists',
    },
  },
  variations: [{
    lists: [3,4],
  }]
}

export const defaultProps = ({section, globals}) => ({
  justify: 'center',
  background: section.palette.background,
  padding: globals.section.padding,
})

export const modifiableProps = {

}