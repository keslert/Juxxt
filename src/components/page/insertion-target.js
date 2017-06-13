import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import flow from 'lodash/flow';

import { DropTarget } from 'react-dnd';
import { insertAlternative, moveSectionToIndex } from '../../core/page';


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
  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 20px;
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
  const { connectDropTarget, isOver, canDrop } = props;
  
  return connectDropTarget(
    <div>
      <StyledInsertionTarget show={isOver && canDrop} />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = Object.assign({insertAlternative, moveSectionToIndex});

export default flow(  
  DropTarget('section', targetSpec, targetCollect),
  connect(mapStateToProps, mapDispatchToProps)
)(InsertionTarget);