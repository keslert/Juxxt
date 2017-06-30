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
  getModifications 
} from '../core/ui';
import { getMaster, updateAlternatives } from '../core/page';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
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
    const { updateAlternatives, setShiftDown, master, setSelected, turnOnModification } = this.props;

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('right', () => updateAlternatives());

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => setShiftDown(true),
      on_keyup: () => setShiftDown(false),
    })

    setSelected(master.sections[1]);
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
    const { master } = this.props;
    
    return (
      <StyledApp>
        <StyledWindow>
          <SplitPane minSize={200} defaultSize='55%' split="vertical">
            <StyledColumn>
              <Page {...master} master={true} sectionsDraggable />
            </StyledColumn>
            <Alternatives />
          </SplitPane>
        </StyledWindow>
        <Sidebar />
      </StyledApp>
    ); 
  }
}

const mapStateToProps = createSelector(
  getMaster,
  getSelectedModification,
  getSelected,
  getModifications,
  (master, selectedModification, selected, modifications) => ({
    master,
    selectedModification,
    modifications,
    selected,
  })
)
const mapDispatchToProps = Object.assign({setShiftDown, updateAlternatives, setSelected, turnOnModification});
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
