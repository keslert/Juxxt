import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import { range } from 'lodash';
import SectionContainer from './section-container';


const HeadingHorizontalItems = ({
  palette, 
  requirements, 
  userOverrides,
  getGlobals,
}) => {


  const globals = getGlobals();
  const props = {
    padding: globals.sectionPadding, 
    background: palette.background,
    justify: "center",
    align: "center",
    ...userOverrides
  }

  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...{getGlobals, userOverrides}}>
        <Group {...requirements.heading} palette={palette} overrides={{margin: '0 0 60px 0'}} />
        <_DisplayFlex>
          {range(0, requirements.items).map(i => (
            <_Flex key={i}>
              <Group {...requirements.item} palette={palette} overrides={{padding: '0 20px'}} />
            </_Flex>
          ))}
        </_DisplayFlex>
      </SectionContainer>
    </_DisplayFlex>
  )
}

export default HeadingHorizontalItems;

export const requirements = {
  heading: {
    type: 'Group',
    options: ['HeadingParagraph', 'IconHeadingParagraph'],
    restrictions: {
      alignment: ['center'],
      iconPosition: ['top'],
    }
  },
  item: {
    type: 'Group',
    options: ['SmallHeadingParagraph', 'IconSmallHeadingParagraph'],
  },
  items: {
    options: [3,4]
  }
}

export const params = {
  padding: true,
  background: true,
}