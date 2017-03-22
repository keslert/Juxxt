import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sections from './meta';
import { interfaceActions } from '../../../core/interface';
import { includes, last, map } from 'lodash';
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
      // background: rgba(122,122,122,0.1);
      // border: 3px dashed rgb(122,122,122);
      border-left: 5px solid tomato;
      border-right: 5px solid tomato;
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
    isSection,
  } = props;
  
  const Section = sections[name];
  return (
    <_Section
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected({uuid, name, isSection}); }}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <Section.default {...props} />
    </_Section>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(map(state.interface.selected, 'uuid'), props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});

const mapDispatchToProps = Object.assign({}, interfaceActions);
export default connect(mapStateToProps, mapDispatchToProps)(Section);