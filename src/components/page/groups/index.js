import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import groups from './meta';
import { interfaceActions } from '../../../core/interface';
import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';
import { mapValues } from 'lodash';
import { generateContent } from '../../../core/generator/content';

const _Group = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    box-sizing: border-box;
  }
  ${props => props.selected && `
    &:before {
      background: rgba(122,122,122,0.1);
      animation: ${fadeIn} 0.3s;
    }
    &:hover:before {
      background: rgba(0, 122,122,0.1);
    }
  `}
`

const Group = (props) => {
  const { 
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
    name, 
    uuid,
    isGroup,
  } = props;

  const Group = groups[name];
  return (
    <_Group 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected({uuid, name, isGroup});}}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <Group.component {...props} />
    </_Group>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(map(state.interface.selected, 'uuid'), props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});

const mapDispatchToProps = Object.assign({}, interfaceActions);
export default connect(mapStateToProps, mapDispatchToProps)(Group);