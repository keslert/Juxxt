import React from 'react';
import styled from 'styled-components';
import Group from '../../groups';
import tinycolor from 'tinycolor2';
import { StyledDisplayFlex } from '../../../common/styled-base';
import SectionContainer from '../section-container';

const Header = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {

  return (
    <StyledDisplayFlex {...props} style={{minHeight: '600px'}}>
      <div style={{width: '100%'}}><Group {...groups.navigation} /></div>
      <SectionContainer {...sectionContainer} align={variation.align}>
        <StyledDisplayFlex flex="1" align="center">  
          <Group {...groups.intro} />
        </StyledDisplayFlex>
      </SectionContainer>
    </StyledDisplayFlex>
  )
}

export default Header;

export const requirements = {
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
  background: `linear-gradient(to left, ${section.palette.background} , ${tinycolor(section.palette.background).darken(7).toString()})`,
  padding: '10px 40px 70px',
})

export const modifiableProps = {
  background: true,
  padding: true,
  minHeight: true,
}