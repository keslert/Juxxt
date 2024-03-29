import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getZoomLevel } from '../../core/ui';
import { getAlternatives, replaceMaster, replaceSectionWithAlternative } from '../../core/page';
import Alternative from './alternative';
import Page from '../page';

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

  handleClick(page) {
    const { replaceMaster, replaceSectionWithAlternative } = this.props;
    if(page.sections.length === 1) {
      replaceSectionWithAlternative(page.sections[0]);
    } else {
      replaceMaster(page);
    }
  }

  renderNoAlternatives() {
    return (
      <p className="mt3 tc black-80">No existing alternatives...</p>
    )
  }

  render() {
    const { alternatives=[], width, zoomLevel } = this.props;
    
    if (!alternatives.length)
      return this.renderNoAlternatives();

    return (
      <StyledAlternatives width={width}>
        <StyledContent>
          {alternatives.map((alternative, i) => (
            <StyledWrapper key={alternative.uid + `${i}`} style={{width: `${100 / zoomLevel}%`}}>
              <Alternative 
                onFavorite={() => null} 
                onDelete={() => null} 
                changes={alternative.sections[0].changes}>
                <Page
                  preview={false}
                  onClick={() => this.handleClick(alternative)}
                  sections={alternative.sections}
                  sectionsDraggable={alternative.isSection}
                  CSSRules={alternative.CSSRules}  
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
  replaceMaster,
  replaceSectionWithAlternative,
}

export default connect(mapStateToProps, mapDispatchToProps)(Alternatives);