import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { 
  getModifications, 
  turnOnModification, 
  setZoomLevel, 
  getZoomLevel,
} from '../../core/interface';

import Stepper from '../common/stepper';
import SearchBar from '../common/search-bar';
import { _Flex, _Spacer } from '../common/styled-base';


const _SmartBar = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  font-size: 14px;
  padding: 15px 0;
  background: rgba(51, 51, 51, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
`

class SmartBar extends React.Component {

  render() {
    const { modifications, turnOnModification, setZoomLevel, zoomLevel } = this.props;
    const buttons = [
      {label: 'Structure', key: 'composition'},
      {label: 'Layout', key: 'variation'},
      {label: 'Palette', key: 'palette'},
      {label: 'Content', key: 'content'},
      {label: 'Theme', key: 'globals'}, 
    ]

    return (
      <_SmartBar>
        <_Flex>
          <SearchBar />
        </_Flex>

        <_Spacer marginLeft="5px">
          <Stepper 
            label={`${zoomLevel}x`}
            onIncrement={() => setZoomLevel(zoomLevel + 1)}
            onDecrement={() => setZoomLevel(zoomLevel - 1)} />
        </_Spacer>

        {buttons.map(({label, key}) => (
          <_Spacer marginLeft="5px" key={key}>
            <Button 
              text={label} 
              active={modifications[key]} 
              onClick={() => turnOnModification(key)}
              />
          </_Spacer>
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
  box-shadow: inset 0 1px 4px rgba(255,255,255,0.05);
  cursor: pointer;
  color: #727272;
  user-select: none;
  font-size: 12px;
  &:hover {
    background: #202020;
  }

  i {
    margin-right: 6px;
    color: ${props => props.active ? '#fff' : '#9e9e9e' };
  }
  border-left: 3px solid #1d1d1d;

  ${props => `
    ${props.active && `
      color: #fff;
      border-color: #fff;
    `}
  `}
`

const Button = ({
  onClick,
  text,
  active,
}) => (
  <_Button active={active} onClick={onClick}>
    <i className="fa fa-lightbulb-o"></i>
    {text}
  </_Button>
)