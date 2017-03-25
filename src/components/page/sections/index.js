import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sections from './meta';
import { interfaceActions } from '../../../core/interface';
import { includes, last, map, pick } from 'lodash';
import flow from 'lodash/flow';

import { generatePalette } from '../../../core/generator/colors';
import { fadeIn } from '../../common/styled-animations';

import AutoScale from 'react-auto-scale';

import { DragSource, DropTarget } from 'react-dnd';

const _Section = styled.div`
  position: relative;
  // margin-top: -1px;
  width: 1360px;

  ${props => `
    ${props.showDrop && `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0px;
        right: 0px;
        bottom: 0;
        // background: rgba(122,122,122,0.1);
        background: hsla(120, 72%, 80%, 0.63);
        // border: 3px dashed rgb(122,122,122);
        // border-left: 5px solid tomato;
        // border-right: 5px solid tomato;
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
    return {
      uuid: props.uuid,
    };
  }
};

const targetSpec = {
  canDrop(props, monitor) {
    return props.master && props.uuid !== monitor.getItem().uuid;
  },
  drop(props) {
    
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

const Section = (props) => {
  const { 
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
    name, 
    uuid,
    connectDragSource,
    connectDropTarget, 
    isDragging,
    isOver,
    canDrop,
    master,
  } = props;

  const selectedProps = pick(props, ['name', 'uuid', 'isSection']);
  
  const Section = sections[name];

  
  return connectDropTarget(
    <div>
      {connectDragSource(
        <div>
          <AutoScale>
            <_Section
              showDrop={master && isOver}
              canDrop={canDrop}
              isDragging={isDragging}
              selected={isSelected || isHovered} 
              onClick={(e) => { e.stopPropagation(); setSelected(selectedProps); }}
              onMouseEnter={() => onHoverableMouseEnter(uuid)}
              onMouseLeave={() => onHoverableMouseLeave(uuid)}
              >
              <Section.default {...props} />
            </_Section>
          </AutoScale>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(map(state.interface.selected, 'uuid'), props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});

const mapDispatchToProps = Object.assign({}, interfaceActions);
export default flow(
  connect(mapStateToProps, mapDispatchToProps),
  DragSource('section', sourceSpec, sourceCollect),
  DropTarget('section', targetSpec, targetCollect)
)(Section);