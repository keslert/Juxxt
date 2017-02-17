import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../common/styled-flex';
import Collection from '../collections';

export const requirements = {
  collections: 2,
}

const _VerticalSplit = styled.div`
  display: flex;
`

const VerticalSplit = ({props, collections}) => {
  return (
    <_VerticalSplit {...props}>
      {collections.map((collection, i) => {
        return (
          <_Flex key={i}>
            <_DisplayFlex justify="center" align="center">
              <Collection {...collection} />
            </_DisplayFlex>
          </_Flex>
        )
      })}
    </_VerticalSplit>
  )
}
export default VerticalSplit;