import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sections from './meta';
import { setSelected } from '../../../core/interface';
import { includes } from 'lodash';
import { generatePalette } from '../../../core/generator/colors';
import { fade } from '../../common/styled-animations';



const after = `
  content: '';
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  bottom: 0;
  background: rgba(122,122,122,0.1);
  border: 2px dashed rgb(122,122,122);
  box-sizing: border-box;
  pointer-events: none;
`

const _Section = styled.div`
  position: relative;
  margin-top: -1px;
  ${props => props.selected && `
    &:after {
      ${after}
    }
  `}
  &:hover:after {
    ${after}
  }
`

const Section = (props) => {
  const { isSelected, setSelected, name, uuid } = props;
  
  const globals = props.getGlobals();
  const palette = generatePalette(globals.colors, props.schema);
  const Section = sections[name];
  return (
    <_Section onClick={() => setSelected(uuid)} selected={isSelected}>
      <Section.component {...props} margin="0 20px" palette={palette} />
    </_Section>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(state.interface.selected, props.uuid),
});

const mapDispatchToProps = Object.assign({setSelected});
export default connect(mapStateToProps, mapDispatchToProps)(Section);