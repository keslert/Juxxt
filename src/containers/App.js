import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { isEqual } from 'lodash';
import flow from 'lodash/flow';
import { 
  setShiftDown, 
  getSelectedModification,
  turnOnModification, 
  getModifications,
  getShowPreview,
  setShowPreview,
} from '../core/ui';

import { 
  getMaster, 
  getSelected, 
  setSelected,
  updateAlternatives, 
  deleteSection, 
  pageUndo,
} from '../core/page';

import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Trashbar from '../components/trashbar';
import Alternatives from '../components/alternatives';
import PageToolbar from '../components/toolbar/page-toolbar';
import AlternativesToolbar from '../components/toolbar/alternatives-toolbar';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import SplitPane from 'react-split-pane';
import Box from '../components/common/box';
import Notification from '../components/common/notification';

const StyledColumn = styled.div`
  width: ${props => props.width}%;
  height: calc(100vh - 40px);
  overflow-y: auto;
`

class App extends React.Component {

  componentDidMount() {
    const { 
      setShiftDown, 
      master, 
      setSelected, 
      turnOnModification, 
      setShowPreview, 
      deleteSection,
      pageUndo,
    } = this.props;

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('escape', () => setShowPreview(false));
    this.listener.simple_combo('backspace', (e) => { 
      if ((e.target.tagName !== "TEXTAREA") && this.props.selected.isSection)
        deleteSection(this.props.selected.section)
      else
        return true
    });
    this.listener.simple_combo('cmd z', pageUndo);

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => setShiftDown(true),
      on_keyup: () => setShiftDown(false),
    })

    turnOnModification('background');
  }

  componentWillReceiveProps(newProps) {
    const { selectedModification, selected, updateAlternatives, modifications } = this.props;
    if(
      selectedModification !== newProps.selectedModification || 
      !isEqual(selected, newProps.selected) ||
      !isEqual(modifications, newProps.modifications)
    ) {
      updateAlternatives();
    }
  }

  render() {
    const { master, preview } = this.props;
    if(preview) {
      return (
        <div>
          <Notification>Press ESC to exit preview</Notification>
          <Page {...master} master={true} preview={true} />
        </div>
      )
    }
    
    return (
      <Box display="flex">
        <Box display="flex" position="relative" flex="1">
          <SplitPane minSize={200} defaultSize='45%' split="vertical">
            <div>
              <PageToolbar />
              <StyledColumn>
                <Page {...master} master={true} preview={false} />
              </StyledColumn>
            </div>
            <div>
              <AlternativesToolbar />
              <Alternatives />
            </div>
          </SplitPane>
        </Box>
        <Sidebar />
        <Trashbar />
      </Box>
    ); 
  }
}

const mapStateToProps = createSelector(
  getMaster,
  getSelectedModification,
  getSelected,
  getModifications,
  getShowPreview,
  (master, selectedModification, selected, modifications, preview) => ({
    master,
    selectedModification,
    modifications,
    selected,
    preview,
  })
)
const mapDispatchToProps = Object.assign({
  setShiftDown, 
  updateAlternatives, 
  setSelected, 
  turnOnModification,
  setShowPreview,
  deleteSection,
  pageUndo,
});
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
