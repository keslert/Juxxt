import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sections from './meta';
import { interfaceActions } from '../../../core/interface';
import { includes, last } from 'lodash';
import { generatePalette } from '../../../core/generator/colors';
import { fadeIn } from '../../common/styled-animations';

const _Section = styled.div`
  position: relative;
  margin-top: -1px;
  ${props => props.selected && `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0px;
      right: 0px;
      bottom: 0;
      background: rgba(122,122,122,0.1);
      border: 3px dashed rgb(122,122,122);
      box-sizing: border-box;
      pointer-events: none;
      animation: ${fadeIn} 0.3s;
    }
  `}
`

const Section = (props) => {
  const { 
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
    name, 
    uuid,
  } = props;
  
  const globals = props.getGlobals();
  const palette = generatePalette(globals.colors, props.schema);
  const Section = sections[name];
  return (
    <_Section
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(uuid); }}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <Section.component {...props} margin="0 20px" palette={palette} />
    </_Section>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(state.interface.selected, props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});

const mapDispatchToProps = Object.assign({}, interfaceActions);
export default connect(mapStateToProps, mapDispatchToProps)(Section);