import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setShowPreview } from '../../core/ui';
import { Toolbar, ToolbarItem } from './styled';
import Box from '../common/box';
import SidebarSVG from '../common/svg/sidebar';
import ModificationToolbar from './modification-toolbar';

import { 
  getSelectedModification,
  turnOnModification,
  setZoomLevel,
  getZoomLevel,
  setSidebarOpen,
} from '../../core/ui';

const buttons = [
  {label: 'Component', key: 'component'},
  {label: 'Layout', key: 'variant'},
  {label: 'Color', key: 'color'},
  {label: 'Style', key: 'style'},
  {label: 'Content', key: 'content'},
  {label: 'Page', key: 'page'},
]

class AlternativesToolbar extends React.Component {

    

  render() {

    const { 
      modification, 
      turnOnModification, 
      setZoomLevel, 
      zoomLevel, 
      setSidebarOpen,
    } = this.props;

    return (
      <div>
        <Toolbar>
          <Box display="flex" justify="space-between">
            <Box display="flex">
              {buttons.map(({label, key}) =>
                <ToolbarItem 
                  key={key} 
                  onClick={() => turnOnModification(key)} 
                  selected={key === modification}
                  >
                  {label}
                </ToolbarItem>
              )}
            </Box>
            <Box display="flex">
              <ToolbarItem onClick={() => setZoomLevel(zoomLevel % 4 + 1)}>
                {Math.floor(100 / zoomLevel)}%
              </ToolbarItem>
            </Box>
          </Box>
        </Toolbar>
        <ModificationToolbar />
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getSelectedModification,
  getZoomLevel,
  (modification, zoomLevel) => ({
    modification,
    zoomLevel,
  })
)

const mapDispatchToProps = {turnOnModification, setZoomLevel, setSidebarOpen};

export default connect(mapStateToProps, mapDispatchToProps)(AlternativesToolbar);