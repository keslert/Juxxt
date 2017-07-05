import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import flow from 'lodash/flow';
import { DropTarget } from 'react-dnd';
import { deleteSection } from '../../core/page';

const targetSpec = {
  canDrop(props, monitor) {
    const section = monitor.getItem();
    return section.master;
  },
  drop(props, monitor) {
    const section = monitor.getItem();
    props.deleteSection(section);
  }
}

const StyledTrashbar = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 999;

  transition: opacity 0.3s ease-in;
  opacity: ${props => props.show ? (props.hovered ? 1 : 0.5) : 0};

  border-top: 100px solid transparent;
  border-left: 100px solid transparent; 
  border-right: 100px solid tomato; 
  border-bottom: 100px solid tomato;
`;

const StyledIcon = styled.i`
  position: absolute;
  font-size: 60px;
  bottom: -70px;
  right: -60px;
  color: #fff;
`;

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

const Trashbar = (props) => {
  const { connectDropTarget, isOver, canDrop } = props;
  
  return connectDropTarget(
    <div>
      <StyledTrashbar show={canDrop} hovered={isOver}>
        <StyledIcon className="fa fa-trash" />
      </StyledTrashbar>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = Object.assign({deleteSection});

export default flow(  
  DropTarget('section', targetSpec, targetCollect),
  connect(mapStateToProps, mapDispatchToProps)
)(Trashbar);