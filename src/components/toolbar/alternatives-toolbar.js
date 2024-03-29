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
  getSidebarOpen,
} from '../../core/ui';

const buttons = [
  {label: 'Component', key: 'component'},
  {label: 'Layout', key: 'layout'},
  {label: 'Background', key: 'background'},
  {label: 'Text', key: 'text'},
  {label: 'Image', key: 'image'},
  // {label: 'Color', key: 'color'},
  // {label: 'Style', key: 'style'},

  // {label: 'Content', key: 'content'},
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
      sidebarOpen,
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
                <i className="fa fa-search-plus"></i> {Math.floor(100 / zoomLevel)}%
              </ToolbarItem>
              <ToolbarItem  onClick={() => setSidebarOpen(sidebarOpen ? false : true)}>
                <SidebarSVG color={(sidebarOpen ? "#03a9f4":"#999")}/>
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
  getSidebarOpen,
  (modification, zoomLevel, sidebarOpen) => ({
    modification,
    zoomLevel,
    sidebarOpen,
  })
)

const mapDispatchToProps = {turnOnModification, setZoomLevel, setSidebarOpen};

export default connect(mapStateToProps, mapDispatchToProps)(AlternativesToolbar);