import React from 'react';
import styled from 'styled-components';
import Suggestion from './suggestion';
import Section from '../page/sections';
import AutoScale from 'react-auto-scale';
import Page from '../page';
import { _DisplayFlex, _Flex } from '../common/styled-base';

import SmartBar from './smart-bar';

const _Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
  box-sizing: border-box;
  padding-bottom: 15px;
  position: relative;
`



const _Content = styled.div`
  height: 100vh;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  padding-top: 60px;
`


class Suggestions extends React.Component {


  render() {
    const { page, width } = this.props;
    return (
      <_Suggestions width={width}>
        <SmartBar />
        
        <_Content>
          {page.sections.map(section => (
            <Suggestion onFavorite={() => null} onDelete={() => null} key={section.uuid}>
              <AutoScale>
                <div style={{width: 1360}}>
                  <Section {...section} />
                </div>
              </AutoScale>
            </Suggestion>
          ))}
        </_Content>
      </_Suggestions>
    )
  }
}

export default Suggestions;