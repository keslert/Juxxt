import React from 'react';
import styled from 'styled-components';

import SearchBar from '../common/search-bar';
import { _Flex } from '../common/styled-base';


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
    return (
      <_SmartBar>
        <_Flex>
          <SearchBar />
        </_Flex>

        {['Theme', 'Structure', 'Layout', 'Palette', 'Content'].map(text => (
          <Button text={text} active={Math.random() > .7} key={text} />
        ))}
        
      </_SmartBar>
    )
  }
}

export default SmartBar;

const _Button = styled.div`
  padding: 5px 8px;
  background: #fff;
  border-radius: 2px;
  margin-left: 5px;
  i {
    margin-right: 6px;
    color: ${props => props.active ? '#ff9800' : '#9e9e9e' };
  }
`

const Button = ({
  onClick,
  text,
  active,
}) => (
  <_Button active={active}>
    <i className="fa fa-lightbulb-o"></i>
    {text}
  </_Button>
)