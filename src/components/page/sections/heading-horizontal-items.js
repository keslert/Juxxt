import React from 'react';
import styled from 'styled-components';
import { StyledFlex, StyledDisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import { range } from 'lodash';
import SectionContainer from './section-container';


const HeadingHorizontalItems = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {

  return (
    <StyledDisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <Group {...groups.heading} />
        <StyledDisplayFlex>
          {groups.item.clones.map((item, i) => (
            <StyledFlex key={i}>
              <Group {...item} index={i} />
            </StyledFlex>
          ))}
        </StyledDisplayFlex>
      </SectionContainer>
    </StyledDisplayFlex>
  )
}

export default HeadingHorizontalItems;

export const requirements = {
  groups: {
    heading: {
      options: ['HeadingParagraph', 'IconHeadingParagraph'],
      restrictions: {
        alignment: ['center'],
        iconPosition: ['top'],
      },
      overwrites: ({variation}) => ({
        margin: '0 0 70px 0',
      })
    },
    item: {
      options: ['SmallHeadingParagraph', 'IconSmallHeadingParagraph'],
      overwrites: ({variation}) => ({
        padding: '0 20px',
      }),
      copies: 'items',
    },
  },
  variations: [{
    items: [3, 4],
  }]
}

export const defaultProps = ({section, globals}) => ({
  justify: 'center',
  align: 'center',
  background: section.palette.background,
  padding: globals.sections.padding,
})

export const modifiableProps = {
  padding: true,
  background: true,
}