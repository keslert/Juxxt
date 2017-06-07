import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getZoomLevel } from '../../core/ui';
import { getAlternatives, setMaster } from '../../core/page';
import Alternative from './alternative';
import Section from '../page/sections';
import Page from '../page';
import { StyledDisplayFlex, StyledFlex } from '../common/styled-base';

import SmartBar from './smart-bar';

const _Alternatives = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}%;
  position: relative;
  padding: 0 10px;
`;

const _Content = styled.div`
  max-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  padding-bottom: 5px;
  margin-left: -5px;
  margin-right: -5px;
`;

const StyledWrapper = styled.div`
  padding: 5px;
`;

class Alternatives extends React.Component {

  render() {
    const { alternatives=[], width, zoomLevel, setMaster } = this.props;
    return (
      <_Alternatives width={width}>
        <SmartBar />
        <_Content>
          {alternatives.map((alternative, i) => (
            <StyledWrapper key={alternative.uuid + i} style={{width: `${100 / zoomLevel}%`}}>
              <Alternative onFavorite={() => null} onDelete={() => null}>
                <Page 
                  onClick={alternative.sections.length > 1 ? () => setMaster(alternative) : undefined}
                  sections={alternative.sections}
                  sectionsDraggable={alternative.isSection}
                  brandColors={alternative.brandColors}
                  master={false} />
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

const mapDispatchToProps = {
  setMaster
}

export default connect(mapStateToProps, mapDispatchToProps)(Alternatives);