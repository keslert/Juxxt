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

const BasicLayout = ({requirements, overrides}) => {
  return (
    <_DisplayFlex justify="center" align="center">
      <Collection {...requirements.collection} />
    </_DisplayFlex>
  )
}
export default BasicLayout;