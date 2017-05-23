import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { 
  getModifications, 
  turnOnModification, 
  setZoomLevel, 
  getZoomLevel,
} from '../../core/ui';

import Stepper from '../common/stepper';
import SearchBar from '../common/search-bar';
import { StyledFlex, StyledSpacer } from '../common/styled-base';


const _SmartBar = styled.div`
  display: flex;
  font-size: 14px;
  padding: 10px 0;
  background: rgba(51, 51, 51, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
`

class SmartBar extends React.Component {

  render() {
    const { modifications, turnOnModification, setZoomLevel, zoomLevel } = this.props;
    const buttons = [
      {label: 'Component', key: 'composition'},
      {label: 'Variation', key: 'variation'},
      {label: 'Palette', key: 'palette'},
      {label: 'Content', key: 'content'},
      {label: 'Theme', key: 'theme'},
    ]

    return (
      <_SmartBar>
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
        
      </_SmartBar>
    )
  }
}

const mapStateToProps = createSelector(
  getModifications,
  getZoomLevel,
  (modifications, zoomLevel) => ({
    modifications,
    zoomLevel,
  })
)

const mapDispatchToProps = Object.assign({turnOnModification, setZoomLevel});
export default connect(mapStateToProps, mapDispatchToProps)(SmartBar);


const _Button = styled.div`
  padding: 7px 8px;
  background: #1d1d1d;
  border-radius: 2px;
  cursor: pointer;
  color: #727272;
  user-select: none;
  font-size: 12px;

  // i {
  //   margin-right: 6px;
  //   color: ${props => props.active ? '#fff' : '#9e9e9e' };
  // }

  // border-left: 3px solid #1d1d1d;

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
  <_Button active={active} onClick={onClick}>
    {text}
  </_Button>
)