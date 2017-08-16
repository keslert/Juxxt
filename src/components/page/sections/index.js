import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import * as sections from './_components';
import { 
  replaceSectionWithAlternative, 
  getSelected,
  setSelected,
} from '../../../core/page';

import { 
  onHoverableMouseEnter,
  onHoverableMouseLeave,
  setSidebarOpen,
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
    ${(props.selected || props.hovered) && `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        ${props.selected 
          ? `
            border: 10px solid #3accab;
            border-image: linear-gradient(to right, #3accab 0%,#3accab 2%, transparent 2%, transparent 98%, #3accab 98%, #3accab 100%);
            border-image-slice: 1;
          `
          : `
            border: 10px solid rgba(122,122,122,0.8);
            border-image: linear-gradient(to right, rgba(122,122,122,0.8) 0%,rgba(122,122,122,0.8) 2%, transparent 2%, transparent 98%, rgba(122,122,122,0.8) 98%, rgba(122,122,122,0.8) 100%);
            border-image-slice: 1;
          `
        }
        

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
      id,
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
      // TODO: This is DISGUSTING... need a better fix.
      // This adds a duplicate section for a fixed navbar so it still takes up space.
      return (
        <div>
          <SectionComponent {...this.props} />
          {this.props.style.fixed && <SectionComponent {...this.props} style={{...this.props.style, fixed: false}} />}
        </div>
      )
    }
  
    
    
    return connectDropTarget(
      <div key={id}>
        {connectDragSource(
          <div>
            <AutoScale>
              <StyledSection className="section"
                showDrop={isOver && canDrop}
                canDrop={canDrop}
                isDragging={isDragging}
                selected={isSelected && !preview && master} 
                hovered={isHovered && !preview && master}
                onClick={(e) => { 
                  if(master) {
                    e.stopPropagation(); 
                    this.handleClick();
                  }
                }}
                onDoubleClick={(e) => { 
                  if(master) {
                    e.stopPropagation(); 
                    setSidebarOpen(true); 
                  }
                }}
                onMouseEnter={() => onHoverableMouseEnter(id)}
                onMouseLeave={() => onHoverableMouseLeave(id)}
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
  (_, props) => props.id,
  (hovered, selected, id) => ({
    isSelected: selected.id === id,
    isHovered: last(hovered) === id,
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