import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
// import ContentPanel from '../panels/content-panel';
// import PropsPanel from '../panels/props-panel';

import ThemeSidebar from './theme-sidebar';

const _Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  bottom: 0;
  width: 280px;
  background: ${theme.black};
  box-sizing: border-box;
`

const Sidebar = ({

}) => {
  return (
    <_Sidebar>
      <ThemeSidebar />
    </_Sidebar>
  )
}

export default Sidebar;