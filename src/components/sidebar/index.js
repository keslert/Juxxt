import React from 'react';
import styled from 'styled-components';

import ContentPanel from '../panels/content-panel';
import PropsPanel from '../panels/props-panel';

const _Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: -250px;
  bottom: 0;
  width: 250px;
  background: #f1f1f1;
`

const Sidebar = ({

}) => {
  return (
    <_Sidebar>
      <ContentPanel />
      <PropsPanel />
    </_Sidebar>
  )
}

export default Sidebar;