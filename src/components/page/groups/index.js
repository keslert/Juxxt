import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import groups from './_components';
import { uiActions } from '../../../core/ui';
import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';

const StyledGroup = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -12px;
    right: -12px;
    bottom: -10px;
    box-sizing: border-box;
  }
  ${props => `
    ${props.selected && `
      &:before {
        border-left: 6px dashed tomato;
        border-right: 6px dashed tomato;
      }
    `};
    ${props.hovered && `
      &:before {
        background: rgba(122,122,122,0.3);
      }
    `}
  `};


`

const Group = (props) => {
  const { 
    name, 
    uid,
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave
  } = props;
  const GroupComponent = groups[name];
  
  return (
    <StyledGroup
      selected={isSelected}
      hovered={isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(props);}}
      onMouseEnter={() => onHoverableMouseEnter(uid)}
      onMouseLeave={() => onHoverableMouseLeave(uid)}
      className="w-100P"
      >
      <GroupComponent {...props} />
    </StyledGroup>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.selected.uid === props.uid,
  isHovered: last(state.ui.hovered) === props.uid,
});

const mapDispatchToProps = Object.assign({}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(Group);