import React from 'react';
import elements from './meta';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { interfaceActions } from '../../../core/interface';
import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';
import { getContent } from '../../../core/generator/content';

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
    isElement,
    registerItem,
  } = props;
  const Element = elements[props.name];

  const content = getContent(props);

  return (
    <_Element 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected({uuid, name, isElement});}}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <Element.component {...props.props} content={content} />
    </_Element>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(map(state.interface.selected, 'uuid'), props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});
const mapDispatchToProps = Object.assign({}, interfaceActions);
export default connect(mapStateToProps, mapDispatchToProps)(Element);