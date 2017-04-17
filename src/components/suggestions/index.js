import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getZoomLevel } from '../../core/interface';
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
`;

const _Content = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  box-sizing: border-box;
  padding-top: 62px;
  padding-bottom: 5px;
`;

const StyledWrapper = styled.div`
  width: ${props => props.width}px;
  padding: 5px;
  box-sizing: border-box;
`;

class Suggestions extends React.Component {

  render() {
    const { alternatives=[], width, zoomLevel } = this.props;
    return (
      <_Suggestions width={width}>
        <SmartBar />
        <_Content>
          {alternatives.map((section, i) => (
            <StyledWrapper key={section.uuid + i} width={width / zoomLevel}>
              <Suggestion onFavorite={() => null} onDelete={() => null}>
                <Section {...section} master={false} index={-1} />
              </Suggestion>
            </StyledWrapper>
          ))}
        </_Content>
      </_Suggestions>
    )
  }
}

const mapStateToProps = createSelector(
  getAlternatives,
  getZoomLevel,
  (alternatives, zoomLevel) => ({
    alternatives,
    zoomLevel,
  })
)

export default connect(mapStateToProps)(Suggestions);