import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import theme from '../../styles/theme';
// import ContentPanel from '../panels/content-panel';
// import PropsPanel from '../panels/props-panel';

import { getSelected, getSidebarOpen, setSidebarOpen } from '../../core/ui';

import ContentPanel from './panels/content-panel';

import ThemeSidebar from './theme-sidebar';

const StyledSidebar = styled.div`
  position: relative;
  width: ${props => props.open ? '240px' : 0};
  height: 100vh;
  background: ${theme.black};
  box-sizing: border-box;
  box-shadow: inset 0 0 3px rgba(0,0,0,0.5);
  border-left: 1px solid #222;
  overflow: hidden;
`

const StyledHeading = styled.div`
  font-size: 16px;
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
    const { open, selected, setSidebarOpen } = this.props;

    const itemType = selected.isSection ? 'Section' : selected.isGroup ? 'Group' : 'Element';

    return (
      <StyledSidebar open={open}>
        <CloseButton onClick={() => setSidebarOpen(false)}><i className="fa fa-times"></i></CloseButton>
        <StyledHeading>{itemType} Settings</StyledHeading>

        {<ContentPanel element={selected} hidden={!selected.isElement} />}
        <ThemeSidebar />

      </StyledSidebar>
    )
  }
}

const mapStateToProps = createSelector(
  getSidebarOpen,
  getSelected,
  (open, selected) => ({
    open,
    selected,
  })
)

const mapDispatchToProps = {
  setSidebarOpen,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);