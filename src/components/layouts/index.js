import React from 'react';
import styled from 'styled-components';

import VerticalSplit from './vertical-split';

const _Layout = styled.div`
  background: ${props => props.background};
`

const Layout = (props) => {
  const { name } = props;
  const Layout = layouts[name];
  
  return (
    <_Layout {...props}>
      {<Layout {...props} />}
    </_Layout>
  )
}
export default Layout;

const layouts = {
  VerticalSplit,
}