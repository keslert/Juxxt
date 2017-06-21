import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Button extends React.PureComponent {
 
  render() {
    const { style, color, content } = this.props;
    const styleClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);
    return(
      <button className={styleClassNames + ' dib ' + colorClassNames}>
        BUTTON
      </button>
    )
  }
}
export default Button;
