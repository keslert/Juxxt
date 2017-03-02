import React from 'react';
import styled from 'styled-components';
import Group from '../../groups';
import tinycolor from 'tinycolor2';
import { _DisplayFlex } from '../../../common/styled-base';



const Header = ({
  palette,
  requirements,
  userOverrides,
  getGlobals,
}) => {

  const props = {
    background: `linear-gradient(to left, ${palette.background} , ${tinycolor(palette.background).darken(7).toString()})`,
    padding: '10px 40px 70px',
    ...userOverrides,
  }

  return (
    <_DisplayFlex {...props} style={{minHeight: '600px'}}>
      <_DisplayFlex direction="column" flex="1">
        <Group {...requirements.navigation} palette={palette} />

        <_DisplayFlex flex="1" direction="column" justify="center" align={requirements.align}>
          <Group {...requirements.intro} palette={palette} />
        </_DisplayFlex>
      </_DisplayFlex>
    </_DisplayFlex>
  )
}

export default Header;

export const requirements = {
  navigation: {
    type: 'Group',
    options: ['Navigation'],
  },
  intro: {
    type: 'Group',
    options: [],
  },
  align: {
    options: ['flex-start', 'center', 'flex-end']
  }
}

export const params = {
  background: true,
  padding: true,
}