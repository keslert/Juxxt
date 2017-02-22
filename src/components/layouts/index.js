import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import layouts from './all';
import { setSelected } from '../../core/interface';
import { includes } from 'lodash';

const _Layout = styled.div`
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

const Layout = (props) => {
  const { isSelected, setSelected, name, uuid } = props;
  const Layout = layouts[name];
  return (
    <_Layout onClick={() => setSelected([uuid])} selected={isSelected}>
      <Layout.component {...props} />
    </_Layout>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: includes(state.interface.selected, props.uuid),
});
const mapDispatchToProps = Object.assign({setSelected});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);