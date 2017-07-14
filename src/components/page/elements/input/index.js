import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Input extends React.PureComponent {
 
  render() {
    const { style, color } = this.props;
    
    const colorClassNames = convertColorToAtomic(color);
    const styleClassNames = convertStyleToAtomic(style);
    return(
      <input className={colorClassNames + ' ' + styleClassNames} />
    )
  }
}
export default Input;
