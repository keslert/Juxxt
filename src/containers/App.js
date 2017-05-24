import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { range, isEqual } from 'lodash';
import flow from 'lodash/flow';

import { randomItem } from '../core/utils';
import { setShiftDown, getModifications, getSelected } from '../core/ui';
import { getMaster, updateAlternatives } from '../core/page';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Alternatives from '../components/alternatives';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import SplitPane from 'react-split-pane';



const _App = styled.div`
  display: flex;
`

const _Window = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`

const _Column = styled.div`
  width: ${props => props.width}%;
  height: 100vh;
  overflow-y: auto;
`

class App extends React.Component {

  constructor() {
    super();

  }

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
      <_App>
        <_Window>
          <SplitPane minSize={200} defaultSize='45%' split="vertical">
            <_Column>
              <Page {...master} master sectionsDraggable />
            </_Column>
            <Alternatives />
          </SplitPane>
        </_Window>
        <Sidebar />
      </_App>
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
