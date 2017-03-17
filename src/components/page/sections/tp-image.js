import React from 'react';
import styled from 'styled-components';
import { _DisplayFlex } from '../../common/styled-base';
import Group from '../groups';
import SectionContainer from './section-container';

const TPImage = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {
  const innerProps = {
    justify: 'center',
    align: 'center',
    flex: 1,
  }

  let left = groups.point;
  let right = groups.image;
  if(variation.imagePosition === 'left') {
    left = groups.image;
    right = groups.point;
  }

  return (
    <_DisplayFlex {...props}>
      <SectionContainer {...sectionContainer}>
        <_DisplayFlex>
          <_DisplayFlex {...innerProps}>
            <Group {...left} />
          </_DisplayFlex>
          <_DisplayFlex {...innerProps}>
            <Group {...right} />
          </_DisplayFlex>
        </_DisplayFlex>
      </SectionContainer>
    </_DisplayFlex>
  )
}
export default TPImage;

export const requirements = {
  groups: {
    point: {
      type: 'Group',
      options: ['IconHeadingParagraph'],
      overwrites: ({variation}) => ({
        margin: variation.imagePosition === 'left' ? '0 0 0 30px' : '0 30px 0 0',
      })
    },
    image: {
      type: 'Group',
      options: ['Device', 'BlockImage'],
      consistent: true,
      overwrites: ({variation}) => ({
        margin: variation.imagePosition === 'left' ? '0 30px 0 0' : '0 0 0 30px',
      })
    },
  },
  variations: [{
    imagePosition: ['left', 'right'],
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
}