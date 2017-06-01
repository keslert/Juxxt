import React from 'react';
import elements from './_components';
import * as types from './_types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { uiActions } from '../../../core/ui';
import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';

const _Element = styled.span`
  position: relative;
  display: inline-block;
  ${props => props.selected && `
    &:after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      background: rgba(122,122,122,0.1);
      box-sizing: border-box;
      pointer-events: none;
      animation: ${fadeIn} 0.3s;
    }
  `}
  &:hover:after {
    background: rgba(0, 122,122,0.1);
  }
`

const Element = (props) => {
  
  const { 
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
    name, 
    uuid,
  } = props;
  const ElementComponent = elements[types[props.name].is];

  return (
    <_Element 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(props);}}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <ElementComponent {...props} />
    </_Element>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.shiftDown && includes(map(state.ui.selected, 'familyID'), props.familyID),
  isHovered: last(state.ui.hovered) === props.uuid,
});
const mapDispatchToProps = Object.assign({}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(Element);