import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../../common/styled-flex';
import Group from '../groups';

export const requirements = {
  group: {
    type: 'Group',
    options: [],
  }
}

export const params = {
  padTB: 40,
  padLR: 20,
  background: undefined,
}

const _Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    background: ${props.background};
    padding: ${props.padding};
  `}
`

const BasicSection = ({requirements, palette, overrides}) => {

  const padding = `${params.padTB}px ${params.padLR}px`;
  const background = palette.background;
  const props = { padding, background, ...overrides}

  return (
    <_Section {...props}>
      <Group {...requirements.group} palette={palette} />
    </_Section>
  )
}
export default BasicSection;