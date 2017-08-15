import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import elements from './_components';
import styled from 'styled-components';

import { 
  setSidebarOpen,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
} from '../../../core/ui';

import { setSelected } from '../../../core/page/actions';
import { getSelected } from '../../../core/page/selectors';

import { includes, last, map } from 'lodash';

const StyledElement = styled.div`
  position: relative;
  width: 100%;
  height:100%;
  ${props => props.sudoSelected && `
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      left: -8px;
      right: -8px;
      bottom: -4px;

      border: 4px solid #3accab;      
      border-image: ${props.selected 
        ? 'linear-gradient(to right, #3accab 0%,#3accab 2%, transparent 2%, transparent 98%, #3accab 98%, #3accab 100%);'
        : 'linear-gradient(to right, rgba(122,122,122,0.3) 0%,rgba(122,122,122,0.3) 2%, transparent 2%, transparent 98%, rgba(122,122,122,0.3) 98%, rgba(122,122,122,0.3) 100%);'
      };
      border-image-slice: 1;
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
      isSudoSelected,
      setSelected,
      setSidebarOpen,
      isHovered, 
      onHoverableMouseEnter, 
      onHoverableMouseLeave,
    } = this.props;
  
    const ElementComponent = elements[is];

    if(this.context.preview || !this.context.master) {
      return <ElementComponent {...this.props} />
    }

    return (
      <StyledElement 
        selected={isSelected}
        sudoSelected={isSudoSelected}
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
  master: React.PropTypes.bool.isRequired,
};

const mapStateToProps = createSelector(
  getSelected,
  (_, props) => ({id: props.id, fullRelativeId: props.fullRelativeId}),
  (selected, {fullRelativeId, id}) => ({
    isSelected: selected.fullRelativeId === fullRelativeId,
    isSudoSelected: selected.id === id,
  })
);

const mapDispatchToProps = {
  setSelected,
  setSidebarOpen,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
};
export default connect(mapStateToProps, mapDispatchToProps)(Element);