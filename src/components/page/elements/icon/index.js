import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Icon extends React.PureComponent {
  render() {
    const { style, color, content } = this.props;

    const colorClassNames = convertColorToAtomic(color);
    const styleClassNames = convertStyleToAtomic(style);
    return (
      <i className={`fa fa-${content.type} ${colorClassNames} ${styleClassNames}`} />
    )
  }
}
export default Icon;