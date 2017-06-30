import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Button extends React.PureComponent {
 
  render() {
    let { style, color } = this.props;
    
    const colorClassNames = convertColorToAtomic(color);
    const styleClassNames = convertStyleToAtomic(style);
    return(
      <button className={styleClassNames + ' dib ' + colorClassNames}>
        BUTTON
      </button>
    )
  }
}
export default Button;
