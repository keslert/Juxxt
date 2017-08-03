import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { setShowPreview } from '../../core/ui';
import { canUndo, canRedo, pageUndo, pageRedo } from '../../core/page';
import { Toolbar, ToolbarItem, ToolbarButton } from './styled';
import Box from '../common/box';

class PageToolbar extends React.Component {
  render() {
    const { setShowPreview, pageUndo, pageRedo, canUndo, canRedo } = this.props;
    return (
      <Toolbar>
        <Box display="flex" justify="space-between">
          <Box display="flex">
            
          </Box>
          <Box display="flex">
            {canRedo && 
              <ToolbarItem onClick={pageRedo}><i className="fa fa-repeat"></i></ToolbarItem>
            }
            {canUndo && 
              <ToolbarItem onClick={pageUndo}><i className="fa fa-undo"></i></ToolbarItem>
            }
            <ToolbarButton onClick={() => setShowPreview(true)}>
              Preview
            </ToolbarButton>
          </Box>
        </Box>
      </Toolbar>
    )
  }
}


const mapStateToProps = createSelector(
  canUndo,
  canRedo,
  (canUndo, canRedo) => ({
    canUndo,
    canRedo,
  })
)
const mapDispatchToProps = {
  setShowPreview,
  pageUndo,
  pageRedo,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageToolbar);