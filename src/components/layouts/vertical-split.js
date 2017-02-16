import React from 'react';
import styled from 'styled-components';
import { _Flex } from '../common/styled-flex';
import Collection from '../collections';

export const requirements = {
  collections: [
    {},
    {},
  ]
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
            <Collection {...collection} />
          </_Flex>
        )
      })}
    </_VerticalSplit>
  )
}
export default VerticalSplit;