import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getAlternatives } from '../../core/page';
import Suggestion from './suggestion';
import Section from '../page/sections';
import Page from '../page';
import { _DisplayFlex, _Flex } from '../common/styled-base';

import SmartBar from './smart-bar';

const _Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
  box-sizing: border-box;
  position: relative;
`

const _Content = styled.div`
  height: 100vh;
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  padding-top: 62px;
  padding-bottom: 5px;
`


class Suggestions extends React.Component {

  render() {
    const { alternatives=[], width } = this.props;
    return (
      <_Suggestions width={width}>
        <SmartBar />
        
        <_Content>
          {alternatives.map((section, i) => (
            <Suggestion onFavorite={() => null} onDelete={() => null} key={section.uuid + i}>
              <Section {...section} />
            </Suggestion>
          ))}
        </_Content>
      </_Suggestions>
    )
  }
}

const mapStateToProps = createSelector(
  getAlternatives,
  (alternatives) => ({
    alternatives,
  })
)

export default connect(mapStateToProps)(Suggestions);