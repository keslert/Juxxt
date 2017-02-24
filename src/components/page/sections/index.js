import React from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import sections from './meta';
import { setSelected } from '../../../core/interface';
import { includes } from 'lodash';
import { generatePalette } from '../../../core/generator/color';


const fade = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`



const _Section = styled.div`
  position: relative;
  margin-top: -1px;
  ${props => props.selected && `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: -8px;
      right: -8px;
      bottom: 0;
      border-left: 8px solid tomato;
      border-right: 8px solid tomato;
      pointer-events: none;
      animation: ${fade} 1s;
      opacity: 0;
    }
  `}
  &:hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    right: -8px;
    bottom: 0;
    border-left: 8px solid tomato;
    border-right: 8px solid tomato;
    pointer-events: none;
    opacity: 1;
  }
`

const Section = (props) => {
  const { isSelected, setSelected, name, uuid } = props;
  
  const globals = props.getGlobals();
  const palette = generatePalette(globals.theme, props.themeVariation);
  const Section = sections[name];
  return (
    <_Section onClick={() => setSelected([uuid])} selected={isSelected}>
      <Section.component {...props} margin="0 20px" palette={palette} />
    </_Section>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: includes(state.interface.selected, props.uuid),
});

const mapDispatchToProps = Object.assign({setSelected});
export default connect(mapStateToProps, mapDispatchToProps)(Section);