import React from 'react';
import styled from 'styled-components';
import { _DisplayFlex } from '../../common/styled-flex';
import Group from '../groups';


export const requirements = {
  background: {
    type: 'color',
    options: ['Split', 'Light-Light', 'Dark-Dark', 'Same']
  },
  group: {
    type: 'Group',
    options: [],
  },
}

export const params = {
  padTB: 40,
  padLR: 20,
}


const _FiftyFifty = styled.div`
  display: flex;
`;

const _Flex = styled.div`
  flex: 1;
  ${props => `
    background: ${props.background};
    padding: ${props.padding};
  `}
`;


const FiftyFifty = ({
  requirements, 
  overrides, 
  palette
}) => {

  const padding = `${params.padTB}px ${params.padLR}px`;

  return (
    <_FiftyFifty {...overrides}>
      <_Flex background={palette.background} padding={padding}>
        <_DisplayFlex justify="center" align="center">
          <Group {...requirements.group} palette={palette} />
        </_DisplayFlex>
      </_Flex>
      <_Flex background={palette.background} padding={padding}>
        <_DisplayFlex justify="center" align="center">
          <Group {...requirements.group} palette={palette} />
        </_DisplayFlex>
      </_Flex>
    </_FiftyFifty>
  )
}
export default FiftyFifty;