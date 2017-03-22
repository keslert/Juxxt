import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { range } from 'lodash';

import { randomItem } from '../core/utils';
import { setShiftDown } from '../core/interface';
import { updateMaster } from '../core/page';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import AutoScale from 'react-auto-scale';
import Suggestions from '../components/suggestions';



const width = 680;

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
    const { updateMaster } = this.props;

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('s', () => updateMaster({compisition: true}));
    this.listener.simple_combo('l', () => updateMaster({variation: true}));
    this.listener.simple_combo('p', () => updateMaster({palette: true}));
    this.listener.simple_combo('c', () => updateMaster({content: true}));
    this.listener.simple_combo('g', () => updateMaster({globals: true}));

    this.listener.simple_combo('right', () => updateMaster(this.props.modifications));

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => this.props.setShiftDown(true),
      on_keyup: () => this.props.setShiftDown(false),
    })
  }

  render() {

    const { master } = this.props;
    return (
      <_App>
        <_Window>
          <_Column>
            <AutoScale>
              <Page {...master} />
            </AutoScale>
          </_Column>

          <Suggestions page={master} width={width} />

        </_Window>
        <Sidebar />
      </_App>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.interface.selected,
  modifications: state.interface.modifications,
  master: state.page.master,
})
const mapDispatchToProps = Object.assign({setShiftDown, updateMaster});
export default connect(mapStateToProps, mapDispatchToProps)(App);
