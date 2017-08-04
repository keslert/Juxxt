import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import theme from '../../styles/theme';

import { getSidebarOpen, setSidebarOpen } from '../../core/ui';
import { getSelected, getMaster, getAlternatives } from '../../core/page';

import ContentPanel from './panels/content-panel';
import ColorPanel from './panels/color-panel';
import FontPanel from './panels/font-panel';
import Box from '../common/box';

import ThemeSidebar from './theme-sidebar';

import TemplatePicker from '../../containers/template-picker';

const StyledSidebar = styled.div`
  position: relative;
  height: 100vh;
  background: ${theme.black};
  box-sizing: border-box;
  transform: translateX(${props => props.open ? 0 : 240}px);
  width: ${props => props.open ? 240 : 0}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
`;

class Sidebar extends React.PureComponent {

  render() {
    const { open, selected, master, alternative, setSidebarOpen } = this.props;

    return (
      <StyledSidebar open={open}>
        <Box>
          <CloseButton onClick={() => setSidebarOpen(false)}><i className="fa fa-times"></i></CloseButton>
          <StyledHeading>Page Settings</StyledHeading>
          <ContentPanel item={selected} hidden={!selected.isElement} />
          <ColorPanel page={master} alternative={alternative} />
          <FontPanel page={master} alternative={alternative} />
        </Box>
        <Box>
          <TemplatePicker />
        </Box>
      </StyledSidebar>
    )
  }
}

const mapStateToProps = createSelector(
  getSidebarOpen,
  getSelected,
  getMaster,
  getAlternatives,
  (open, selected, master, alternatives) => ({
    open,
    selected,
    master,
    alternative: alternatives[0],
  })
)

const mapDispatchToProps = {
  setSidebarOpen,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);