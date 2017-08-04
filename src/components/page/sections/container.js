import React from 'react';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import pick from 'lodash/pick';

class Container extends React.PureComponent {
  render() {
    const { noBackgroundImage, style, color, children, classNames='' } = this.props;

    let colorClassNames = classNames + ' ' + convertColorToAtomic(color);
    
    const inlineStyle = {};
    if(color.backgroundImage && !noBackgroundImage) {
      const imageStyle = pick(style, ['crop', 'filter', 'parallax'])
      colorClassNames = colorClassNames.concat(convertStyleToAtomic(imageStyle));
      inlineStyle.backgroundImage = `url(${color.backgroundImage})`;
    }
    return (
      <div className={colorClassNames} style={inlineStyle}>
        {children}
      </div>
    )
  }
}

export default Container;