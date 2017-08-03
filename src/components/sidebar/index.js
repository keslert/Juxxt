import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import theme from '../../styles/theme';
// import ContentPanel from '../panels/content-panel';
// import PropsPanel from '../panels/props-panel';

import { getSidebarOpen, setSidebarOpen } from '../../core/ui';
import { getSelected, getMaster } from '../../core/page';

import ContentPanel from './panels/content-panel';
import ColorPanel from './panels/color-panel';
import FontPanel from './panels/font-panel';

import ThemeSidebar from './theme-sidebar';

const StyledSidebar = styled.div`
  position: relative;
  width: ${props => props.open ? '240px' : 0};
  height: 100vh;
  background: ${theme.black};
  box-sizing: border-box;
`

const StyledHeading = styled.div`
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  text-align: center;
  padding: 10px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: rgba(255,255,255,0.8);
  }
`

class Sidebar extends React.PureComponent {

  render() {
    const { open, selected, master, setSidebarOpen } = this.props;

    return (
      <StyledSidebar open={open}>
        <CloseButton onClick={() => setSidebarOpen(false)}><i className="fa fa-times"></i></CloseButton>
        <StyledHeading>Page Settings</StyledHeading>
        <ContentPanel element={selected} hidden={!selected.isElement} />
        <ColorPanel page={master} />
        <FontPanel page={master} />
      </StyledSidebar>
    )
  }
}

const mapStateToProps = createSelector(
  getSidebarOpen,
  getSelected,
  getMaster,
  (open, selected, master) => ({
    open,
    selected,
    master,
  })
)

const mapDispatchToProps = {
  setSidebarOpen,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);