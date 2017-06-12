import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import groups from './_components';
import { uiActions } from '../../../core/ui';
import { includes, last, map, pick } from 'lodash';
import { fadeIn } from '../../common/styled-animations';
import { mapValues } from 'lodash';

const StyledGroup = styled.div`
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
      background: rgba(122, 122,122,0.3);
    }
  `}
`

const Group = (props) => {
  const { 
    name, 
    id,
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
  } = props;

  const GroupComponent = groups[name];
  return (
    <StyledGroup 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(props);}}
      onMouseEnter={() => onHoverableMouseEnter(id)}
      onMouseLeave={() => onHoverableMouseLeave(id)}
      className="w-100P"
      >
      <GroupComponent {...props} />
    </StyledGroup>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.shiftDown && includes(map(state.ui.selected, 'familyID'), props.familyID),
  isHovered: last(state.ui.hovered) === props.id,
});

const mapDispatchToProps = Object.assign({}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(Group);