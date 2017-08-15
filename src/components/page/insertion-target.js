import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import flow from 'lodash/flow';

import { DropTarget } from 'react-dnd';
import { insertAlternative, moveSectionToIndex, insertBest } from '../../core/page';


const targetSpec = {
  canDrop(props, monitor) {
    const section = monitor.getItem();
    const { index } = props;
    return index !== section.index && index !== (section.index - 1);
  },
  drop(props, monitor) {
    const section = monitor.getItem();
    if(section.master) {
      props.moveSectionToIndex(section, props.index);
    } else {
      props.insertAlternative(section, props.index + 1);
    }
  }
}

const StyledInsertionTarget = styled.div`
  height: 0;
  width: 100%;
  position: relative;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease-in;
  z-index: 999;
  &:after {
    content: 'Insert Section';
    position: absolute;
    
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    
    background: #3accab;
    color: #fff;
    ${props => `
      top: ${props.enlarge ? '-32px' : '-10px'};
      height: ${props.enlarge ? '64px' : '20px'};
    `}
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  

`

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  }
}

const InsertionTarget = (props) => {
  const { connectDropTarget, isOver, canDrop, insertBest, index, itemType } = props;
  
  return connectDropTarget(
    <div>
      <StyledInsertionTarget enlarge={itemType === 'section'} show={isOver && canDrop} onClick={() => insertBest(index)} />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = Object.assign({insertAlternative, insertBest, moveSectionToIndex});

export default flow(  
  DropTarget('section', targetSpec, targetCollect),
  connect(mapStateToProps, mapDispatchToProps)
)(InsertionTarget);