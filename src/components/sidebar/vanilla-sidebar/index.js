import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { 
  getSelected, 
  getMaster, 
  canUndo, 
  canRedo, 
  pageUndo, 
  pageRedo, 
} from '../../../core/page';

import { getModificationOptions, setShowPreview } from '../../../core/ui';
import Box from '../../common/box';

import { StyledSidebar, StyledHeading } from '../common/styled'; 

import SectionPanel from './section-panel';
import BackgroundPanel from './background-panel';
import LayoutPanel from './layout-panel';
import ImagePanel from './image-panel';
import TextPanel from './text-panel';
import ContentPanel from '../panels/content-panel';


const StyledButton = styled.div`
  font-size: 16px;
  width: 100%;
  background: ${props => props.highlight ? '#3accab' : 'rgba(255,255,255,0.05)'};
  color: #fff;
  padding: 12px 16px;
  cursor: pointer;
  text-align: center;
`

class VanillaSidebar extends React.Component {

  render() {
    const { 
      selected, 
      master, 
      setShowPreview, 
      canUndo, 
      canRedo,
      pageUndo,
      pageRedo,
    } = this.props;

    return (
      <StyledSidebar open={true}>
        <Box>
          <StyledButton highlight onClick={() => setShowPreview(true)}>
            Preview
          </StyledButton>
          <ContentPanel item={selected} hidden={false} />
          <SectionPanel selected={selected} page={master} />
          <BackgroundPanel selected={selected} page={master} />
          <LayoutPanel selected={selected} page={master} />
          <ImagePanel selected={selected} page={master} />
          <TextPanel selected={selected} page={master} />
        </Box>
        <Box>
          <Box display="flex">
            {canUndo && <Box flex="1">
              <StyledButton onClick={pageUndo}><i className="fa fa-undo" /></StyledButton>
            </Box>}
            {canRedo && <Box flex="1">
              <StyledButton onClick={pageRedo}><i className="fa fa-repeat" /></StyledButton>
            </Box>}
          </Box>
        </Box>
      </StyledSidebar>
    )
  }
}

const mapStateToProps = createSelector(
  getSelected,
  getMaster,
  canUndo,
  canRedo,
  (selected, master, canUndo, canRedo) => ({
    selected,
    master,
    canUndo,
    canRedo,
  })
)

const mapDispatchToProps = {
  setShowPreview,
  pageUndo,
  pageRedo,
}

export default connect(mapStateToProps, mapDispatchToProps)(VanillaSidebar);