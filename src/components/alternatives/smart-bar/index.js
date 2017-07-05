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
} from '../../../core/ui';

import Stepper from '../../common/stepper';
import SearchBar from '../../common/search-bar';
import { StyledFlex, StyledSpacer } from '../../common/styled-base';
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
    const { modification, turnOnModification, setZoomLevel, zoomLevel, setSidebarOpen } = this.props;
    const buttons = [
      {label: 'Component', key: 'component'},
      {label: 'Variant', key: 'variant'},
      {label: 'Color', key: 'color'},
      {label: 'Style', key: 'style'},
      {label: 'Content', key: 'content'},
    ]

    return (
      <StyledSmartBar>
        <Box display="flex" flexWrap="wrap" width="100%" marginBottom="10px">
          <StyledFlex>
            <SearchBar />
          </StyledFlex>

          <StyledSpacer marginLeft="5px">
            <Stepper 
              label={`${Math.floor(100 / zoomLevel)}%`}
              onIncrement={() => setZoomLevel(zoomLevel - 1)}
              onDecrement={() => setZoomLevel(zoomLevel + 1)} />
          </StyledSpacer>

          {buttons.map(({label, key}) => (
            <StyledSpacer marginLeft="5px" key={key}>
              <Button 
                text={label} 
                active={key === modification} 
                onClick={() => turnOnModification(key)}
                onDoubleClick={() => {
          
                  console.log('doubled')
                }}
                />
            </StyledSpacer>
          ))}
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

const mapDispatchToProps = Object.assign({turnOnModification, setZoomLevel, setSidebarOpen});
export default connect(mapStateToProps, mapDispatchToProps)(SmartBar);


const StyledButton = styled.div`
  padding: 6px 8px;
  background: #1d1d1d;
  border-radius: 2px;
  cursor: pointer;
  color: #727272;
  user-select: none;
  ${props => `
    ${props.active && `
      color: #202020;
      background: #fff;
    `}
  `}
`

const Button = ({
  onClick,
  text,
  active,
}) => (
  <StyledButton active={active} onClick={onClick}>
    {text}
  </StyledButton>
)