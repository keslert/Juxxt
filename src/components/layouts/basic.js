import React from 'react';
import styled from 'styled-components';
import { _Flex, _DisplayFlex } from '../common/styled-flex';
import Collection from '../collections';

export const requirements = {
  collections: 1,
}

const BasicLayout = ({props, collections}) => {
  return (
    <_DisplayFlex justify="center" align="center">
      <Collection {...collections[0]} />
    </_DisplayFlex>
  )
}
export default BasicLayout;