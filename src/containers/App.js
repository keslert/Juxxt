import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { range, isEqual } from 'lodash';
import flow from 'lodash/flow';

import { randomItem } from '../core/utils';
import { setShiftDown, getModifications, getSelected } from '../core/interface';
import { updateMaster, getMaster, updateAlternatives } from '../core/page';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Suggestions from '../components/suggestions';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



const width = 700;

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
  width: ${width}px;
  height: 100vh;
  overflow-y: auto;
  padding: 15px;
  box-sizing: border-box;
`


const _PageWrapper = styled.div`
  margin: 15px;
  width: ${width}px;
`

class App extends React.Component {

  constructor() {
    super();

  }

  componentDidMount() {
    const { updateAlternatives } = this.props;

    this.listener = new window.keypress.Listener();
    // this.listener.simple_combo('s', () => updateMaster({composition: true}));
    // this.listener.simple_combo('l', () => updateMaster({variation: true}));
    // this.listener.simple_combo('p', () => updateMaster({palette: true}));
    // this.listener.simple_combo('c', () => updateMaster({content: true}));
    // this.listener.simple_combo('g', () => updateMaster({globals: true}));

    this.listener.simple_combo('right', () => updateAlternatives(this.props.modifications));

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => this.props.setShiftDown(true),
      on_keyup: () => this.props.setShiftDown(false),
    })
  }

  componentWillReceiveProps(newProps) {
    const { modifications, selected, updateAlternatives } = this.props;
    if(!isEqual(modifications, newProps.modifications) || !isEqual(selected, newProps.selected)) {
      updateAlternatives(newProps.modifications);
      // updateMaster(newProps.modifications);
    }
  }

  render() {
    const { master } = this.props;
    return (
      <_App>
        <_Window>
          <_Column>
            <Page {...master} />
          </_Column>

          <Suggestions width={width} />

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
const mapDispatchToProps = Object.assign({setShiftDown, updateMaster, updateAlternatives});
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
