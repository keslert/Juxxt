import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sections from './all';
import { setSelected } from '../../../core/interface';
import { includes } from 'lodash';

const _Section = styled.div`
  position: relative;
  margin-top: -1px;
  &:after {
    position: absolute;
    top: 0;
    left: -8px;
    right: -8px;
    bottom: 0;
    border-left: 8px solid tomato;
    border-right: 8px solid tomato;
    pointer-events: none;
  }
  ${props => props.selected && `
    &:after {
      content: '';
    }
  `}
  &:hover:after {
    content: '';
  }
`

const Section = (props) => {
  const { isSelected, setSelected, name, uuid } = props;
  const Section = sections[name];
  return (
    <_Section onClick={() => setSelected([uuid])} selected={isSelected}>
      <Section.component {...props} />
    </_Section>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: includes(state.interface.selected, props.uuid),
});
const mapDispatchToProps = Object.assign({setSelected});
export default connect(mapStateToProps, mapDispatchToProps)(Section);