import React from 'react';
import { _DisplayFlex } from '../../common/styled-base';
import { _Label } from './styled-form';
import { capitalize } from 'lodash';
import Input from './input';
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
        {['top', 'right', 'bottom', 'left'].map(direction =>
          <_DisplayFlex flex="1" key={direction} margin={direction === 'left' ? '0' : '0 10px 0 0'}>
            <Input 
              type="number" 
              value={parts[direction]}
              onChange={value => this.onChange({[direction]: value})}
              label={capitalize(direction)}
              />
          </_DisplayFlex>
        )}
      </_DisplayFlex>
    )
  }
}

export default MarginPaddingInput;