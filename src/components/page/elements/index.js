import React from 'react';
import elements from './meta';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { interfaceActions } from '../../../core/interface';
import { includes, last } from 'lodash';

const _Element = styled.span`
  position: relative;
  display: inline-block;
  ${props => props.selected && `
    &:after {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: rgba(122,122,122,0.1);
      border: 2px dashed rgb(122,122,122);
      box-sizing: border-box;
      pointer-events: none;
    }
  `}
`

const Element = (props) => {
  
  const { 
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
    name, uuid } = props;
  const Element = elements[props.name];

  return (
    <_Element 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(uuid);}}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <Element.component {...props} />
    </_Element>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(state.interface.selected, props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});
const mapDispatchToProps = Object.assign({}, interfaceActions);
export default connect(mapStateToProps, mapDispatchToProps)(Element);