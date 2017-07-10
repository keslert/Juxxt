import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sections from './_components';
import { overrideSectionWithAlternative } from '../../../core/page';
import { uiActions } from '../../../core/ui';
import { includes, last, map } from 'lodash';
import flow from 'lodash/flow';

import { fadeIn } from '../../common/styled-animations';

import AutoScale from 'react-auto-scale';

import { DragSource, DropTarget } from 'react-dnd';

const StyledSection = styled.div`
  position: relative;
  width: 1440px;
  
  ${props => `
    ${props.selected && `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-right: 8px solid tomato;
        border-left: 8px solid tomato;
        pointer-events: none;
      }
    `};
    ${props.showDrop && `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0px;
        right: 0px;
        bottom: 0;
        background: hsla(120, 72%, 80%, 0.63);
        box-sizing: border-box;
        pointer-events: none;
        animation: ${fadeIn} 0.3s;
        ${!props.canDrop && 'background: hsla(0, 72%, 80%, 0.63);'}
      }
    `};
    ${props.isDragging && 'opacity: 0.1;'};
  `};
  
`

const sourceSpec = {
  beginDrag(props) {
    return props;
  },
  canDrag(props) {
    return props.draggable;
  }
};

const targetSpec = {
  canDrop(props, monitor) {
    const { master } = props;
    const section = monitor.getItem();
    return master && !section.master;
  },
  drop(props, monitor) {
    const alternative = monitor.getItem();
    const { overrideSectionWithAlternative } = props;
    overrideSectionWithAlternative(props, alternative);
  }
}

function sourceCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}



class Section extends React.Component {

  render() {

    const { 
      name, 
      uid,
      master,
      isSelected,
      setSelected,
      setSidebarOpen,
      isHovered, 
      onHoverableMouseEnter, 
      onHoverableMouseLeave,
      connectDragSource,
      connectDropTarget, 
      isDragging,
      isOver,
      canDrop,
    } = this.props;

  
    const SectionComponent = sections[name];
    
    return connectDropTarget(
      <div key={uid}>
        {connectDragSource(
          <div>
            <AutoScale>
              <StyledSection className="section"
                showDrop={master && isOver}
                canDrop={canDrop}
                isDragging={isDragging}
                selected={isSelected || isHovered} 
                onClick={(e) => { e.stopPropagation(); setSelected(this.props); }}
                onDoubleClick={(e) => { e.stopPropagation(); setSidebarOpen(true); }}
                onMouseEnter={() => onHoverableMouseEnter(uid)}
                onMouseLeave={() => onHoverableMouseLeave(uid)}
                >
                <SectionComponent {...this.props} />
              </StyledSection>
            </AutoScale>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.selected.uid === props.uid,
  isHovered: last(state.ui.hovered) === props.uid,
});

const mapDispatchToProps = Object.assign({overrideSectionWithAlternative}, uiActions);
export default flow(
  DragSource('section', sourceSpec, sourceCollect),
  DropTarget('section', targetSpec, targetCollect),
  connect(mapStateToProps, mapDispatchToProps)
)(Section);