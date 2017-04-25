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





const _App = styled.div`
  display: flex;
`

const _Window = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
`

const _Column = styled.div`
  width: ${props => props.width}px;
  padding-right: 20px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
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
        { true && 
          <_Window>
            <_Column width={400}>
              <Page {...master} master sectionsDraggable />
            </_Column>
            <Alternatives width={700} />
          </_Window>
        }
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
