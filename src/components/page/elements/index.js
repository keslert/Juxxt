import React from 'react';
import elements from './_components';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { uiActions } from '../../../core/ui';
import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';

const StyledElement = styled.div`
  position: relative;
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
    id,
    is,
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
  } = props;
  const ElementComponent = elements[is];

  return (
    <StyledElement 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(props);}}
      onMouseEnter={() => onHoverableMouseEnter(id)}
      onMouseLeave={() => onHoverableMouseLeave(id)}
      >
      <ElementComponent {...props} />
    </StyledElement>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.shiftDown && includes(map(state.ui.selected, 'familyID'), props.familyID),
  isHovered: last(state.ui.hovered) === props.id,
});
const mapDispatchToProps = Object.assign({}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(Element);