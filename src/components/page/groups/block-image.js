import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';

import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class BlockImage extends React.Component {
  render() {
    const { elements, style, color } = this.props;

    const styleClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={styleClassNames + ' ' + colorClassNames}>
        <Element {...elements.icon} />
      </div>
    )
  }
}
export default BlockImage;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    icon: {
      name: BasicImage.name,
    },
  }
}