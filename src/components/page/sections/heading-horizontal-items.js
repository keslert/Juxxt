import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../../common/styled-base';
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
    <_DisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <Group {...groups.heading} />
        <_DisplayFlex>
          {range(0, variation.items).map(i => (
            <_Flex key={groups.item.uuid + i}>
              <Group {...groups.item} index={i} />
            </_Flex>
          ))}
        </_DisplayFlex>
      </SectionContainer>
    </_DisplayFlex>
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
      overrides: ({variation}) => ({
        margin: '0 0 70px 0',
      })
    },
    item: {
      options: ['SmallHeadingParagraph', 'IconSmallHeadingParagraph'],
      overrides: ({variation}) => ({
        padding: '0 20px',
      })
    },
  },
  variations: [{
    items: [3, 4],
  }]
}

export const defaultProps = ({palette, globals}) => ({
  justify: 'center',
  align: 'center',
  background: palette.background,
  padding: globals.section.padding,
})

export const modifiableProps = {
  padding: true,
  background: true,
}