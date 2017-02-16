import React from 'react';
import styled from 'styled-components';
import Page from '../components/page';
import { range } from 'lodash';

import { variations as buttonVariations } from '../components/elements/button';
import { randomItem } from '../core/utils';


const _App = styled.div``

const _Window = styled.div`
  overflow: scroll;
  display: flex;
  padding: 40px;
`

const width = 500;
const height = 818;
const _PageWrapper = styled.div`
  margin: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,.2);
  width: ${width}px;
  height: ${height}px;
`

const _Scale = styled.div`
  transform-origin: 0px 0px;
  transform: scale(${ width/1100 });
`

class App extends React.Component {
  render() {
    return (
      <_App>
        <_Window>
          {range(0, 1).map(i => (
            <_PageWrapper key={i}>
              <_Scale>
                <Page {...data} />
              </_Scale>
            </_PageWrapper>
          ))}
        </_Window>
      </_App>
    );
  }
}


const data = {
  header: true,
  content: {
    sections: [{
      name: 'VerticalSplit',
      props: {},
      collections: [
        {
          name: 'TripleDecker',
          props: {
            elements: [
              {
                name: 'Icon',
                props: { name: 'plane' }
              },
              {
                name: 'Paragraph',
                props: { color: '#333' },
              },
              {
                name: 'Button',
                props: { type: randomItem(buttonVariations.type.options), icon: randomItem(buttonVariations.icon.options), size: randomItem(buttonVariations.size.options), background: '#544373', color: 'white' },
              }
            ]
          }
        },
        {
          name: 'TripleDecker',
          props: {
            elements: [
              {
                name: 'Icon',
                props: { name: 'plane' }
              },
              {
                name: 'Paragraph',
                props: { color: '#333' },
              },
              {
                name: 'Button',
                props: { type: randomItem(buttonVariations.type.options), icon: randomItem(buttonVariations.icon.options), size: randomItem(buttonVariations.size.options), background: '#544373', color: 'white' },
              }
            ]
          }
        },
      ]
    }]
  },
  footer: true,
}

export default App;
