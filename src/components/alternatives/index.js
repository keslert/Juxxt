import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getZoomLevel } from '../../core/ui';
import { getAlternatives, setMaster } from '../../core/page';
import Alternative from './alternative';
import Page from '../page';

import SmartBar from './smart-bar';

const StyledAlternatives = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}%;
  position: relative;
  padding: 0 10px;
`;

const StyledContent = styled.div`
  max-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  padding-bottom: 55px;
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
      <StyledAlternatives width={width}>
        <SmartBar />
        <StyledContent>
          {alternatives.map((alternative, i) => (
            <StyledWrapper key={alternative.uuid} style={{width: `${100 / zoomLevel}%`}}>
              <Alternative onFavorite={() => null} onDelete={() => null}>
                <Page 
                  onClick={alternative.sections.length > 1 ? () => setMaster(alternative) : undefined}
                  sections={alternative.sections}
                  sectionsDraggable={alternative.isSection}
                  websiteColors={alternative.websiteColors}
                  backgroundBlueprint={alternative.backgroundBlueprint}
                  master={false} />
              </Alternative>
            </StyledWrapper>
          ))}
        </StyledContent>
      </StyledAlternatives>
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