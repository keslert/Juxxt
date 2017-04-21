import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getZoomLevel } from '../../core/ui';
import { getAlternatives } from '../../core/page';
import Alternative from './alternative';
import Section from '../page/sections';
import Page from '../page';
import { StyledDisplayFlex, StyledFlex } from '../common/styled-base';

import SmartBar from './smart-bar';

const _Alternatives = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
  box-sizing: border-box;
  position: relative;
`;

const _Content = styled.div`
  max-height: 100vh;
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

class Alternatives extends React.Component {

  render() {
    const { alternatives=[], width, zoomLevel } = this.props;
    return (
      <_Alternatives width={width}>
        <SmartBar />
        <_Content>
          {alternatives.map((section, i) => (
            <StyledWrapper key={section.uuid + i} width={width / zoomLevel}>
              <Alternative onFavorite={() => null} onDelete={() => null}>
                <Page sections={[section]} master={false} />
              </Alternative>
            </StyledWrapper>
          ))}
        </_Content>
      </_Alternatives>
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

export default connect(mapStateToProps)(Alternatives);