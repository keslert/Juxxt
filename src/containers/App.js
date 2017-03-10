import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Page from '../components/page';
import OverridePanel from '../components/panels/override-panel';
import { range } from 'lodash';

import { randomItem } from '../core/utils';
import { generate, init } from '../core/generator';
import { setShiftDown } from '../core/interface';

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

    const pages = init();
    this.state = {
      master: pages[0],
      bot: pages[1],
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.updateBot(this.props.modifications);
    // }, 3000);

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('s', () => this.updateMaster({compisition: true}));
    this.listener.simple_combo('l', () => this.updateMaster({variation: true}));
    this.listener.simple_combo('p', () => this.updateMaster({palette: true}));
    this.listener.simple_combo('c', () => this.updateMaster({content: true}));
    this.listener.simple_combo('g', () => this.updateMaster({globals: true}));

    this.listener.simple_combo('right', () => this.updateMaster(this.props.modifications));

    this.listener.register_combo({
      keys: "shift",
      on_keydown: () => this.props.setShiftDown(true),
      on_keyup: () => this.props.setShiftDown(false),
    })
  }

  generatePage(page, type) {
    return generate(
      page,
      type,
      this.props.selected
    );
  }

  updateBot(type) {
    const bot = this.generatePage(this.state.bot, type);
    this.setState({bot});
  }

  updateMaster(type) {
    const master = this.generatePage(this.state.master, type);
    // const bot = this.generatePage({...master, uuid: this.state.bot.uuid}, type);
    this.setState({master});
  }


  render() {

    const { master, bot } = this.state;
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
})
const mapDispatchToProps = Object.assign({setShiftDown});
export default connect(mapStateToProps, mapDispatchToProps)(App);
