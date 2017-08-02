import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';
import { range } from 'lodash';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class BlockImage extends React.Component {
  render() {
    const { elements, style, color } = this.props;

    const styleClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);
    debugger;
    return (
      <div className={styleClassNames + ' ' + colorClassNames}>
        <Element {...elements.image} />
      </div>
    )
  }
}
export default BlockImage;

export const blueprint = {
  inherits: [],
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
      blueprint: {
        image: {
          shadow: ['shadow'],
        },
        style: {
          shadow: {
            _default: 0,
            options: [0,'light','dark']
          }
        }
      }
    },
  }
}