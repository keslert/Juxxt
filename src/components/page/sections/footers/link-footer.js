import React from 'react';
import Group from '../../groups';
import { StyledDisplayFlex, StyledFlex } from '../../../common/styled-base';
import SectionContainer from '../section-container';

const LinkFooter = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {

  return (
    <StyledDisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <StyledDisplayFlex widthPercentage='100' justify='space-between'>
          {groups.list.clones.map(list => 
            <StyledFlex key={list.uuid}>
              <Group {...list} />
            </StyledFlex>
          )}
        </StyledDisplayFlex>
      </SectionContainer>
    </StyledDisplayFlex>
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