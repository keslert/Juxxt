import React from 'react';
import styled from 'styled-components';
import Group from '../../groups';
import tinycolor from 'tinycolor2';
import { _DisplayFlex } from '../../../common/styled-flex';

const _Header = styled.div`
  display: flex;
  height: 600px;
  ${props => `
    background: ${props.background};
    padding: ${props.margin};
  `}
`

const Header = ({
  margin,
  palette,
  requirements,
  overrides,
}) => {

  const props = {
    // background: 'url(https://unsplash.it/1100/600?image=964)',
    background: `linear-gradient(to left, ${palette.background} , ${tinycolor(palette.background).darken(7).toString()})`,
    margin,
    ...overrides,
  }

  return (
    <_Header {...props}>
      <_DisplayFlex direction="column" flex="1">
        <Group {...requirements.navigation} palette={palette} />

        <_DisplayFlex flex="1" direction="column" justify="center" align={requirements.align}>
          <Group {...requirements.intro} palette={palette} />
        </_DisplayFlex>
      </_DisplayFlex>
    </_Header>
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
    options: ['TripleDecker'],
  },
  align: {
    options: ['flex-start', 'center', 'flex-end']
  }

}

export const params = {

}