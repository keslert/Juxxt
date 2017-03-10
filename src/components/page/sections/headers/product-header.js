import React from 'react';
import styled from 'styled-components';
import Group from '../../groups';
import tinycolor from 'tinycolor2';
import { _DisplayFlex } from '../../../common/styled-base';
import SectionContainer from '../section-container';

const Header = ({
  sectionContainer,
  groups,
  variation,
  props,
}) => {

  return (
    <_DisplayFlex {...props} style={{minHeight: '600px'}}>
      <div style={{width: '100%'}}><Group {...groups.navigation} /></div>
      <SectionContainer {...sectionContainer} align={variation.align}>
        <_DisplayFlex flex="1" align="center">  
          <Group {...groups.intro} />
        </_DisplayFlex>
      </SectionContainer>
    </_DisplayFlex>
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

export const defaultProps = ({palette}) => ({
  minHeight: '600px',
  justify: 'center',
  align: 'center',
  flexDirection: 'column',
  flex: 1,
  background: `linear-gradient(to left, ${palette.background} , ${tinycolor(palette.background).darken(7).toString()})`,
  padding: '10px 40px 70px',
})

export const modifiableProps = {
  background: true,
  padding: true,
  minHeight: true,
}