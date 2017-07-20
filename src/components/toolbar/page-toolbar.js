import React from 'react';
import { connect } from 'react-redux';
import { setShowPreview } from '../../core/ui';
import { Toolbar, ToolbarItem, ToolbarButton } from './styled';
import Box from '../common/box';

class PageToolbar extends React.Component {
  render() {
    const { setShowPreview } = this.props;
    return (
      <Toolbar>
        <Box display="flex" justify="space-between">
          <Box display="flex">
            
          </Box>
          <Box display="flex">
            <ToolbarButton onClick={() => setShowPreview(true)}>
              Preview
            </ToolbarButton>
          </Box>
        </Box>
      </Toolbar>
    )
  }
}

const mapDispatchToProps = {
  setShowPreview,
}

export default connect(undefined, mapDispatchToProps)(PageToolbar);