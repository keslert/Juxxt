import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import * as sections from './_components';
import { replaceSectionWithAlternative } from '../../../core/page';
import { 
  setSelected,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
  setSidebarOpen,
  getSelected, 
  getHovered,
} from '../../../core/ui';
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
        border-right: 8px solid #8bc34a;
        border-left: 8px solid #8bc34a;
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
    const { replaceSectionWithAlternative } = props;
    replaceSectionWithAlternative(alternative, props);
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

  handleClick() {
    const { master, setSelected, replaceSectionWithAlternative } = this.props;
    
    if(master) {
      setSelected(this.props);
    } else {
      replaceSectionWithAlternative(this.props);
    }
  }

  render() {

    const { 
      name, 
      uid,
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

    const { preview, master } = this.context;
    const SectionComponent = sections[name];
    if(preview) {
      return <SectionComponent {...this.props} />
    }
  
    
    
    return connectDropTarget(
      <div key={uid}>
        {connectDragSource(
          <div>
            <AutoScale>
              <StyledSection className="section"
                showDrop={master && isOver}
                canDrop={canDrop}
                isDragging={isDragging}
                selected={(isSelected || isHovered) && !preview && master} 
                onClick={(e) => { e.stopPropagation(); this.handleClick()}}
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

Section.contextTypes = {
  preview: React.PropTypes.bool.isRequired,
  master: React.PropTypes.bool.isRequired,
};

const mapStateToProps = createSelector(
  getHovered,
  getSelected,
  (_, props) => props.uid,
  (hovered, selected, uid) => ({
    isSelected: selected.uid === uid,
    isHovered: last(hovered) === uid,
  })
)

const mapDispatchToProps = {
  replaceSectionWithAlternative,
  setSelected,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
  setSidebarOpen,
};

export default flow(
  DragSource('section', sourceSpec, sourceCollect),
  DropTarget('section', targetSpec, targetCollect),
  connect(mapStateToProps, mapDispatchToProps)
)(Section);