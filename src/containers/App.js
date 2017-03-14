import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Page from '../components/page';
import OverridePanel from '../components/panels/override-panel';
import { range } from 'lodash';

import { randomItem } from '../core/utils';
import { setShiftDown } from '../core/interface';
import { updateMaster } from '../core/page';

// https://land-book.com/

const _App = styled.div`
  display: flex;
`

const _Window = styled.div`
  overflow: scroll;
  display: flex;
  flex: 1;
`

const width = 700;
const _PageWrapper = styled.div`
  margin: 15px;
  width: ${width}px;
`

const _Scale = styled.div`
  transform-origin: 0px 0px;
  transform: scale(${ width/1360 });
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
          {[master].map((page, i) => (
            <_PageWrapper key={i}>
              <_Scale>
                <Page {...page} />
              </_Scale>
            </_PageWrapper>
          ))}
        </_Window>
        <OverridePanel />
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
