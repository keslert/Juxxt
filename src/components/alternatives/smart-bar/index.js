import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { 
  getSelectedModification, 
  turnOnModification, 
  setZoomLevel, 
  getZoomLevel,
  getSelected,
  setSidebarOpen,
  setShowPreview,
} from '../../../core/ui';

import Stepper from '../../common/stepper';
import SearchBar from '../../common/search-bar';
import { StyledFlex, StyledSpacer, StyledButton } from '../../common/styled-base';
import Box from '../../common/box';
import ModificationBar from './modification-bar';


const StyledSmartBar = styled.div`
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
`;

class SmartBar extends React.Component {

  render() {
    const { 
      modification, 
      turnOnModification, 
      setZoomLevel, 
      zoomLevel, 
      setSidebarOpen,
      setShowPreview,
    } = this.props;

    const buttons = [
      {label: 'Component', key: 'component'},
      {label: 'Variant', key: 'variant'},
      {label: 'Color', key: 'color'},
      {label: 'Style', key: 'style'},
      {label: 'Content', key: 'content'},
      {label: 'Page', key: 'page'},
    ]

    return (
      <StyledSmartBar>
        <Box display="flex" flexWrap="wrap" width="100%" marginBottom="10px">
          <StyledSpacer marginLeft="5px">
            <Stepper 
              label={`${Math.floor(100 / zoomLevel)}%`}
              onIncrement={() => setZoomLevel(zoomLevel - 1)}
              onDecrement={() => setZoomLevel(zoomLevel + 1)} />
          </StyledSpacer>

          {buttons.map(({label, key}) => (
            <StyledSpacer marginLeft="5px" key={key}>
              <StyledButton 
                background={key === modification ? '#fff' : undefined}
                color={key === modification ? '#202020' : undefined}
                onClick={() => turnOnModification(key)}
                >
                {label}
              </StyledButton>
            </StyledSpacer>
          ))}
          <Box flex="1" textAlign="right" marginLeft="5px">
            <StyledButton 
              background='#6f6f6f'
              color='#ddd'
              onClick={() => setShowPreview(true)}>
              Preview
            </StyledButton>
          </Box>
        </Box>
        <ModificationBar />
      </StyledSmartBar>
    )
  }
}

const mapStateToProps = createSelector(
  getSelectedModification,
  getZoomLevel,
  getSelected,
  (modification, zoomLevel, selected) => ({
    modification,
    zoomLevel,
    selected,
  })
)

const mapDispatchToProps = Object.assign({turnOnModification, setZoomLevel, setSidebarOpen, setShowPreview});
export default connect(mapStateToProps, mapDispatchToProps)(SmartBar);