import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import flow from 'lodash/flow';

import { fadeIn } from '../common/styled-animations';

import { DropTarget } from 'react-dnd';
import { insertAlternative } from '../../core/page';


const targetSpec = {
  canDrop(props, monitor) {
    const item = monitor.getItem();
    const { index } = props;
    return index !== item.index && index !== (item.index - 1);
  },
  drop(props, monitor) {
    const item = monitor.getItem();
    const { insertAlternative, index } = props;
    if(item.isFromMaster) {
      // rearrange
    } else {
      insertAlternative(item.uuid, index);
    }
  }
}

const _InsertionTarget = styled.div`
  height: 0;
  width: 100%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    height: 30px;
    z-index: 30;
    ${props => props.show && 'background: hsla(120, 72%, 80%, 0.63);'};
  }
`

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

const InsertionTarget = (props) => {
  const {
    index,
    connectDropTarget, 
    isDragging,
    isOver,
    canDrop,
  } = props;
  
  return connectDropTarget(
    <div>
      <_InsertionTarget show={isOver && canDrop} />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = Object.assign({insertAlternative});

export default flow(  
  DropTarget('section', targetSpec, targetCollect),
  connect(mapStateToProps, mapDispatchToProps)
)(InsertionTarget);