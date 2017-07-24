import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { isEqual } from 'lodash';
import flow from 'lodash/flow';
import { 
  setShiftDown, 
  getSelected, 
  setSelected, 
  getSelectedModification,
  turnOnModification, 
  getModifications,
  getShowPreview,
  setShowPreview,
} from '../core/ui';
import { getMaster, updateAlternatives, deleteSection } from '../core/page';
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
    } = this.props;

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('escape', () => setShowPreview(false));
    this.listener.simple_combo('backspace', () => (console.log('here'), deleteSection(this.props.selected.section)));

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => setShiftDown(true),
      on_keyup: () => setShiftDown(false),
    })

    setSelected(master.sections[1 % master.sections.length]);
    turnOnModification('style');
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
        <Page {...master} master={true} preview={true} />
      )
    }
    
    return (
      <Box display="flex">
        <Box display="flex" position="relative" flex="1">
          <SplitPane minSize={200} defaultSize='55%' split="vertical">
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
});
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
