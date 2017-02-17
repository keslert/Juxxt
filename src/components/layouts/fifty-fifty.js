import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../common/styled-flex';
import Collection from '../collections';


export const requirements = {
  background: {
    type: 'color',
    options: ['Split', 'Light-Light', 'Dark-Dark', 'Same']
  },
  collection: {
    type: 'Collection',
    options: [],
  }
}

export const params = {
  padding: 20,
}


const _FiftyFifty = styled.div`
  display: flex;
`

const FiftyFifty = ({requirements, overrides}) => {
  return (
    <_FiftyFifty {...params} {...overrides}>
      <_Flex>
        <_DisplayFlex justify="center" align="center">
          <Collection {...requirements.collection} />
        </_DisplayFlex>
      </_Flex>
      <_Flex>
        <_DisplayFlex justify="center" align="center">
          <Collection {...requirements.collection} />
        </_DisplayFlex>
      </_Flex>
    </_FiftyFifty>
  )
}
export default FiftyFifty;