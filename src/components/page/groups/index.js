import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import groups from './meta';
import { interfaceActions } from '../../../core/interface';
import { includes, last } from 'lodash';
import { fadeIn } from '../../common/styled-animations';
import { isString, mapValues } from 'lodash';
import { generateContent } from '../../../core/generator/content';

const _Group = styled.div`
  position: relative;
  ${props => props.selected && `
    &:after {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: rgba(122,122,122,0.1);
      border: 2px dashed rgb(122,122,122);
      box-sizing: border-box;
      pointer-events: none;
      animation: ${fadeIn} 0.3s;
    }
  `}
`

const Group = (props) => {
  const { 
    isSelected,
    setSelected,
    isHovered, 
    onHoverableMouseEnter, 
    onHoverableMouseLeave,
    name, 
    uuid,
    index,
  } = props;


  let _props = props;
  // Is this a repeating group? If so, we need new content.
  if(index !== undefined) {
    _props = {..._props,
      requirements: mapValues(_props.requirements, req => {
        if(isString(req)) { // not an element
          return req;
        }

        return {
          ...req, 
          index, 
          content: generateContent({...req, index})
        };
      })
    }
  }



  const Group = groups[name];
  return (
    <_Group 
      selected={isSelected || isHovered} 
      onClick={(e) => { e.stopPropagation(); setSelected(uuid);}}
      onMouseEnter={() => onHoverableMouseEnter(uuid)}
      onMouseLeave={() => onHoverableMouseLeave(uuid)}
      >
      <Group.component {..._props} />
    </_Group>
  )
}

const mapStateToProps = (state, props) => ({
  isSelected: state.interface.shiftDown && includes(state.interface.selected, props.uuid),
  isHovered: last(state.interface.hovered) === props.uuid,
});

const mapDispatchToProps = Object.assign({}, interfaceActions);
export default connect(mapStateToProps, mapDispatchToProps)(Group);