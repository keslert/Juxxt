import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getSelected, getMaster } from '../../../core/page';
import { getModificationOptions } from '../../../core/ui';
import Box from '../../common/box';

import { StyledSidebar, StyledHeading } from '../common/styled'; 

import ColorPanel from './color-panel';
import LayoutPanel from './layout-panel';

class VanillaSidebar extends React.Component {

  render() {
    const { selected, master } = this.props;

    return (
      <StyledSidebar open={true}>
        <Box>
          <StyledHeading>Settings</StyledHeading>
          <ColorPanel selected={selected} page={master} />
          <LayoutPanel selected={selected} page={master} />
        </Box>
      </StyledSidebar>
    )
  }
}

const mapStateToProps = createSelector(
  getSelected,
  getMaster,
  (selected, master) => ({
    selected,
    master,
  })
)

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(VanillaSidebar);