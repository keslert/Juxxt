import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
// import ContentPanel from '../panels/content-panel';
// import PropsPanel from '../panels/props-panel';

import ThemeSidebar from './theme-sidebar';

const _Sidebar = styled.div`
  position: relative;
  width: 0;
  height: 100vh;
  background: ${theme.black};
  box-sizing: border-box;
  box-shadow: inset 0 0 3px rgba(0,0,0,0.5);
  border-left: 1px solid #222;
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