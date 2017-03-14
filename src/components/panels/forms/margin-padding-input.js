import React from 'react';
import { _DisplayFlex, _Flex } from '../../common/styled-base';
import { _Label, _Input } from './styled-form';

class MarginPaddingInput extends React.Component {

  onChange(changes) {
    const parts = this.getSplitParts();

    const _parts = {
      ...parts,
      ...changes,
    };
    const value = `${_parts.top}px ${_parts.right}px ${_parts.bottom}px ${_parts.left}px`;

    this.props.onChange(value);
  }

  getSplitParts() {
    const { value = '0px' } = this.props;
    const parts = value.replace(/px/g, '').split(' ');

    let top = 0;
    let right = 0;
    let bottom = 0;
    let left = 0;
    if(parts.length === 1) {
      top = right = bottom = left = parts[0];
    } else if(parts.length === 2) {
      top = bottom = parts[0];
      right = left = parts[1];
    } else if(parts.length === 3) {
      top = parts[0];
      right = left = parts[1];
      bottom = parts[2];
    } else {
      top = parts[0];
      right = parts[1];
      bottom = parts[2];
      left = parts[3];
    }
    return {top, right, bottom, left};
  }

  render() {
    const { label } = this.props;
    const parts = this.getSplitParts();

    return (
      <_DisplayFlex>
        <_Label>{label}</_Label>
        {['top', 'right', 'bottom', 'left'].map(direction =>
          <_Flex key={direction}>
            <_Input 
              type="number" 
              value={parts[direction]} 
              onChange={(e) => this.onChange({[direction]: e.target.value || 0})}
              />
          </_Flex>
        )}
      </_DisplayFlex>
    )
  }
}

export default MarginPaddingInput;