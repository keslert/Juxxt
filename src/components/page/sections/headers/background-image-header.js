


import React from 'react';
import styled from 'styled-components';
import Group from '../../groups';

import { StyledDisplayFlex } from '../../../common/styled-base';
import BackgroundImage from '../../../common/background-image';
import SectionContainer from '../section-container';

const BackgroundImageHeader = ({
  sectionContainer,
  groups,
  variation,
  backgroundImage,
  props,
}) => {



  let align;
  switch(backgroundImage.focus) {
    case 'left':
      align = 'flex-end';
      break;
    case 'none':
    case 'border':
    case 'bottom':
      align = 'center';
      break;
    case 'right':
    default:
      align = 'flex-start';
      break;
  }


  return (
    <StyledDisplayFlex {...props} style={{minHeight: '600px', position: 'relative'}}>
      <div style={{width: '100%'}}><Group {...groups.navigation} /></div>
      <SectionContainer {...sectionContainer} align={variation.align}>
        <StyledDisplayFlex flex="1" align="center">  
          <Group {...groups.intro} />
        </StyledDisplayFlex>
      </SectionContainer>
    </StyledDisplayFlex>
  )
}

export default BackgroundImageHeader;

export const requirements = {
  backgroundImage: true,
  groups: {
    navigation: {
      options: ['Navigation'],
    },
    intro: {
      options: [],
    },
  },
  variations: [{
    align: ['flex-start', 'center', 'flex-end'],
  }]
}

export const defaultProps = ({section}) => ({
  minHeight: '600px',
  justify: 'center',
  align: 'center',
  flexDirection: 'column',
  flex: 1,
  background: `url(${section.backgroundImage.src})`,
  backgroundSize: 'cover',
  padding: '10px 40px 70px',
})

export const modifiableProps = {
  background: true,
  padding: true,
  minHeight: true,
}