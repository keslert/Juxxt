import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Page from '../components/page';
import { range } from 'lodash';

import { randomItem } from '../core/utils';
import { generate, init } from '../core/generator';
import { setShiftDown } from '../core/interface';

// https://land-book.com/

const _App = styled.div``

const _Window = styled.div`
  overflow: scroll;
  display: flex;
  padding: 40px;
`

const width = 600;
const _PageWrapper = styled.div`
  margin: 15px;
  width: ${width}px;
`

const _Scale = styled.div`
  transform-origin: 0px 0px;
  transform: scale(${ width/1100 });
`

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      pages: init(),
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   const { pages } = this.state;
    //   this.setState({pages: [
    //     this.generatePage(pages[0], 'shake'),
    //     pages[1]
    //   ]});
    // }, 3000);

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('s', () => this.updatePage(this.state.pages[1], {structure: true}));
    this.listener.simple_combo('l', () => this.updatePage(this.state.pages[1], {layout: true}));
    this.listener.simple_combo('p', () => this.updatePage(this.state.pages[1], {palette: true}));
    this.listener.simple_combo('c', () => this.updatePage(this.state.pages[1], {content: true}));
    this.listener.simple_combo('g', () => this.updatePage(this.state.pages[1], {globals: true}));

    this.listener.simple_combo('right', () => this.updatePage(this.state.pages[1], this.props.modifications));

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

  updatePage(page, type) {
    this.setState({
      pages: this.state.pages.map(_page => 
        _page.uuid !== page.uuid ? _page : this.generatePage(page, type)
      )
    })
  }

  updatePages(type) {
    this.setState({
      pages: this.state.pages.map(page => (
        this.generatePage(page, type)
      ))
    })
  }


  render() {

    const { pages } = this.state;
    return (
      <_App>
        <_Window>
          {pages.map((page, i) => (
            <_PageWrapper key={i}>
              <_Scale>
                <Page {...page} />
              </_Scale>
            </_PageWrapper>
          ))}
        </_Window>
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
