import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Button extends React.PureComponent {
 
  render() {
    const { style, color, content } = this.props;
    
    const isUnstyled = color.borderColor === '#transparent' && color.background === '#transparent';
    const _style = {
      ...style,
      paddingHorizontal: isUnstyled ? 0 : style.paddingHorizontal,
      minWidth: isUnstyled ? 'auto' : style.minWidth,
    }

    const styleClassNames = convertStyleToAtomic(_style);
    const colorClassNames = convertColorToAtomic(color);

    return(
      <a className={styleClassNames + ' dib b-solid tc pointer ' + colorClassNames}>
        {content.text}
      </a>
    )
  }
}
export default Button;
