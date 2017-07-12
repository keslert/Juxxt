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
      left: -6px;
      right: -6px;
      bottom: -3px;
      border-left: 4px dashed tomato;
      border-right: 4px dashed tomato;
      box-sizing: border-box;
      pointer-events: none;
    }
  `}
  &:hover:after {
    content: '';
    position: absolute;
    top: -3px;
    left: -6px;
    right: -6px;
    bottom: -3px;
    background: rgba(0, 122,122,0.1);
  }
`

class Element extends React.PureComponent {
  
  render() {

    const { 
      uid,
      is,
      isSelected,
      setSelected,
      setSidebarOpen,
      isHovered, 
      onHoverableMouseEnter, 
      onHoverableMouseLeave,
    } = this.props;
  
    const ElementComponent = elements[is];

    if(this.context.preview) {
      return <ElementComponent {...this.props} />
    }

    return (
      <StyledElement 
        selected={isSelected} 
        hovered={isHovered}
        onClick={(e) => { e.stopPropagation(); setSelected(this.props);}}
        onDoubleClick={(e) => { e.stopPropagation(); setSidebarOpen(true); }}
        onMouseEnter={() => onHoverableMouseEnter(uid)}
        onMouseLeave={() => onHoverableMouseLeave(uid)}
        >
        <ElementComponent {...this.props} />
      </StyledElement>
    )
  }
}

Element.contextTypes = {
  preview: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.selected.uid === props.uid,
  isHovered: last(state.ui.hovered) === props.uid,
});
const mapDispatchToProps = Object.assign({}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(Element);