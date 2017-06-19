import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { 
  getModifications, 
  turnOnModification, 
  setZoomLevel, 
  getZoomLevel,
  getSelected,
} from '../../../core/ui';

import Stepper from '../../common/stepper';
import SearchBar from '../../common/search-bar';
import { StyledFlex, StyledSpacer } from '../../common/styled-base';
import Box from '../../common/box';
import StyleBar from './style-bar';


const StyledSmartBar = styled.div`
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
`;

class SmartBar extends React.Component {

  render() {
    const { modifications, turnOnModification, setZoomLevel, zoomLevel } = this.props;
    const buttons = [
      {label: 'Component', key: 'component'},
      {label: 'Variant', key: 'variant'},
      {label: 'Color', key: 'color'},
      {label: 'Style', key: 'style'},
      {label: 'Content', key: 'content'},
    ]

    return (
      <StyledSmartBar>
        <Box display="flex" flexWrap="wrap" width="100%">
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
                active={modifications[key]} 
                onClick={() => turnOnModification(key)}
                />
            </StyledSpacer>
          ))}
        </Box>
        { modifications.style && <StyleBar /> }
      </StyledSmartBar>
    )
  }
}

const mapStateToProps = createSelector(
  getModifications,
  getZoomLevel,
  getSelected,
  (modifications, zoomLevel, selected) => ({
    modifications,
    zoomLevel,
    selected,
  })
)

const mapDispatchToProps = Object.assign({turnOnModification, setZoomLevel});
export default connect(mapStateToProps, mapDispatchToProps)(SmartBar);


const StyledButton = styled.div`
  padding: 7px 8px;
  background: #1d1d1d;
  border-radius: 2px;
  cursor: pointer;
  color: #727272;
  user-select: none;
  font-size: 12px;

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