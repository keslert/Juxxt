import React from 'react';
import layouts from './all';

const Layout = (props) => {
  const Layout = layouts[props.name];
  return (
      <Layout.component {...props} />
  )
}

export default Layout;