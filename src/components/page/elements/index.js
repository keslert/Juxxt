import React from 'react';
import elements from './meta';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSelected } from '../../../core/interface';
import { includes } from 'lodash';

const after = `
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(122,122,122,0.1);
  border: 2px dashed rgb(122,122,122);
  box-sizing: border-box;
  pointer-events: none;
`

const _Element = styled.span`
  position: relative;
  display: inline-block;
  ${props => props.selected && `
    &:after {
      ${after}
    }
  `}
  &:hover:after {
    ${after}
  }
`

const Element = (props) => {
  const { isSelected, setSelected, name, uuid } = props;
  const Element = elements[props.name];
  return (
    <_Element selected={isSelected} onClick={(e) => {
      e.stopPropagation();
      setSelected(uuid);
    }}>
      <Element.component {...props} />
    </_Element>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(state.interface.selected, props.uuid),
});
const mapDispatchToProps = Object.assign({setSelected});
export default connect(mapStateToProps, mapDispatchToProps)(Element);