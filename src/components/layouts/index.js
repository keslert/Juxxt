import React from 'react';
import styled from 'styled-components';

import layouts from './all';
import BasicLayout from './basic';

const _Layout = styled.div`
  background: ${props => props.background};
`

const Layout = (props) => {
  const { name } = props;
  const Layout = layouts[name];
  return (
    <_Layout {...props}>
      <Layout.component {...props} />
    </_Layout>
  )
}
export default Layout;