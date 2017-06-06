import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { isEqual } from 'lodash';
import flow from 'lodash/flow';
import { setShiftDown, getModifications, getSelected } from '../core/ui';
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
    const { updateAlternatives, setShiftDown } = this.props;

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('right', () => updateAlternatives(this.props.modifications));

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => setShiftDown(true),
      on_keyup: () => setShiftDown(false),
    })
  }

  componentWillReceiveProps(newProps) {
    const { modifications, selected, updateAlternatives } = this.props;
    if(!isEqual(modifications, newProps.modifications) || !isEqual(selected, newProps.selected)) {
      updateAlternatives(newProps.modifications);
    }
  }

  render() {
    const { master } = this.props;
    return (
      <StyledApp>
        <StyledWindow>
          <SplitPane minSize={200} defaultSize='45%' split="vertical">
            <StyledColumn>
              <Page {...master} master sectionsDraggable />
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
  getModifications,
  getSelected,
  (master, modifications, selected) => ({
    master,
    modifications,
    selected,
  })
)
const mapDispatchToProps = Object.assign({setShiftDown, updateAlternatives});
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
