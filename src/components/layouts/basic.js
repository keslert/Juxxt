import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../common/styled-flex';
import Collection from '../collections';

export const requirements = {
  collection: {
    type: 'Collection',
    options: [],
  }
}

export const params = {

}

const _Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    background: ${props.background}
  `}
`

const BasicLayout = ({requirements, pallet, overrides}) => {
  return (
    <_Layout background={pallet.background}>
      <Collection {...requirements.collection} pallet={pallet} />
    </_Layout>
  )
}
export default BasicLayout;