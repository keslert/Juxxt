import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../../common/styled-flex';
import Group from '../groups';
import { range } from 'lodash';

export const requirements = {
  heading: {
    type: 'Group',
    options: ['HeadingParagraph', 'HeadingSubheading', 'IconHeadingParagraph'],
  },
  item: {
    type: 'Group',
    options: ['HeadingParagraph']
  },
  items: {
    options: [3,4]
  }
}

export const params = {
  padding: true,
  background: true,
}

const _Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => `
    background: ${props.background};
    padding: ${props.padding};
  `}
`

const HeadingHorizontalItems = ({requirements, palette, overrides}) => {

  const padding = '40px';
  const background = palette.background;
  const props = { padding, background, ...overrides}

  return (
    <_Section {...props}>
      <Group {...requirements.heading} palette={palette} margin="0 0 20px 0" />
      <_DisplayFlex>
        {range(0, requirements.items).map(i => (
          <_Flex key={i}>
            <Group {...requirements.item} palette={palette} padding="0 20px" />
          </_Flex>
        ))}
      </_DisplayFlex>
    </_Section>
  )
}

export default HeadingHorizontalItems;