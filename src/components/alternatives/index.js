import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getZoomLevel } from '../../core/ui';
import { getAlternatives, replaceMaster } from '../../core/page';
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
  padding-bottom: 75px;
  margin-left: -5px;
  margin-right: -5px;
`;

const StyledWrapper = styled.div`
  padding: 5px;
`;

class Alternatives extends React.Component {

  render() {
    const { alternatives=[], width, zoomLevel, replaceMaster } = this.props;
    if (alternatives.length === 0 ){
      return (
        <div>
          <SmartBar />
          <p className={ " mt3 fadedtext"}> No existing alternatives </p>
        </div>
      )
    }
    return (
      <StyledAlternatives width={width}>
        <SmartBar />
        <StyledContent>
          {alternatives.map((alternative, i) => (
            <StyledWrapper key={alternative.uid + `${i}`} style={{width: `${100 / zoomLevel}%`}}>
              <Alternative 
                onFavorite={() => null} 
                onDelete={() => null} 
                changes={alternative.sections[0].changes}>
                <Page 
                  onClick={alternative.sections.length > 1 ? () => replaceMaster(alternative) : undefined}
                  sections={alternative.sections}
                  sectionsDraggable={alternative.isSection}
                  colorBlueprint={alternative.colorBlueprint}
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
  replaceMaster
}

export default connect(mapStateToProps, mapDispatchToProps)(Alternatives);