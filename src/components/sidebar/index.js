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
  box-shadow: inset 0 0 3px rgba(0,0,0,0.5);
  border-left: 2px solid #222;
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