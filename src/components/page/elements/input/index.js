import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Input extends React.PureComponent {
 
  render() {
    const { style, color, content } = this.props;
    
    const colorClassNames = convertColorToAtomic(color);
    const styleClassNames = convertStyleToAtomic(style);
    return(
      <input placeholder={content.placeholder} className={colorClassNames + ' b-none b-underline ' + styleClassNames} />
    )
  }
}
export default Input;

//placeholder = placeholder_val