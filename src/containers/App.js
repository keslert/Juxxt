import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Page from '../components/page';
import { range } from 'lodash';

import { variations as buttonVariations } from '../components/elements/button';
import { randomItem } from '../core/utils';
import { generate, init } from '../core/generator';

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
    setInterval(() => {
      const { pages } = this.state;
      this.setState({pages: [
        this.generatePage(pages[0], 'shake'),
        pages[1]
      ]});
    }, 3000);

    this.listener = new window.keypress.Listener();
    this.listener.simple_combo('s', () => this.updatePages('shake')) //
    this.listener.simple_combo('t', () => this.updatePages('stir')) //
    this.listener.simple_combo('n', () => this.updatePages('nudge')) //
    this.listener.simple_combo('left', () => null); // Go back
  }

  generatePage(page, type) {
    return generate(
      page,
      type,
      this.props.selected
    );
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
})
export default connect(mapStateToProps)(App);
