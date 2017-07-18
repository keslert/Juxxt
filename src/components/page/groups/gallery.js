import React from 'react';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import { range } from 'lodash';

class Gallery extends React.PureComponent {
  render () {
    const { style, color, elements, variant } = this.props;
    
    const boxStyle = {
      display: "flex",
      align: "center",
      justify: "center",
      flex: "wrap",
      marginHorizontal: -style.padding,
    }
    const divStyle = {
      ...style,
      width: Math.floor(100 / (variant.columns)) + 'P',
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const divClassNames = convertStyleToAtomic(divStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames + ' Gallery'}>
        <div className={styleClassNames}>
          {elements.images.clones.map((element, i) => (
            <div className={divClassNames}key={i}>
              <Element {...element} className={"w-100P"}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery;

export const blueprint = {
  type: 'gallery',
  inherits: ['GutterSection'],
  style: {
    padding: {
      _default: 2,
      options: range(0,4)
    }
  },
  color: {},
  elements: {
    images: {
      name: 'GalleryImage',
      clones: {_default: 9 },
    }
  },
  variants: [{
    columns: {
      _default:3,
      options: range(2, 7),
    }
  }]
}

