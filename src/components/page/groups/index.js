import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import groups from './meta';
import { setSelected } from '../../../core/interface';
import { includes } from 'lodash';
import { fade } from '../../common/styled-animations';

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

const _Group = styled.div`
  position: relative;
  ${props => props.selected && `
    &:after {
      ${after}
    }
  `}
  &:hover:after {
    ${after}
  }
`

const Group = (props) => {
  const { isSelected, setSelected, name, uuid } = props;

  const Group = groups[name];
  return (
    <_Group selected={isSelected} onClick={(e) => {
      e.stopPropagation();
      setSelected(uuid);
    }}>
      <Group.component {...props} />
    </_Group>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(state.interface.selected, props.uuid),
});

const mapDispatchToProps = Object.assign({setSelected});
export default connect(mapStateToProps, mapDispatchToProps)(Group);