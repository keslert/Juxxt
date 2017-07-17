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
import { getMaster, updateAlternatives } from '../core/page';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Trashbar from '../components/trashbar';
import Alternatives from '../components/alternatives';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import SplitPane from 'react-split-pane';



const StyledApp = styled.div`
  display: flex;
`

const StyledWindow = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`

const StyledColumn = styled.div`
  width: ${props => props.width}%;
  height: 100vh;
  overflow-y: auto;
`

class App extends React.Component {

  componentDidMount() {
    const { updateAlternatives, setShiftDown, master, setSelected, turnOnModification, setShowPreview } = this.props;

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('escape', () => setShowPreview(false));

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => setShiftDown(true),
      on_keyup: () => setShiftDown(false),
    })

    setSelected(master.sections[1]);
    turnOnModification('component');
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
      <StyledApp>
        <StyledWindow>
          <SplitPane minSize={200} defaultSize='55%' split="vertical">
            <StyledColumn>
              <Page {...master} master={true} preview={false} />
            </StyledColumn>
            <Alternatives />
          </SplitPane>
        </StyledWindow>
        <Sidebar />
        <Trashbar />
      </StyledApp>
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
});
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
