import React from 'react';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class Gallery extends React.PureComponent {
  render () {
    const { style, color, elements } = this.props;
    
    const boxStyle = {
      display: "flex",
      align: "center",
      justify: "center",
      flex: "wrap",
      marginHorizontal: -style.gutter,
    }
    const divStyle = {
      ...style,
      paddingHorizontal: style.gutter,
      paddingVertical: style.gutter,
      width: Math.floor(100 / (style.columns)) + 'P',
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const divClassNames = convertStyleToAtomic(divStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames + ' Gallery'}>
        <div className={styleClassNames}>
          {elements.images.clones.map((element, i) => (
            <div className={divClassNames} key={i}>
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
  inherits: ['ListGutter'],
  style: {
    columns: { _default: 3, options: [2,3]},
  },
  color: {},
  elements: {
    images: {
      name: 'BasicImage',
      blueprint: { 
        clones: { _default: 6, min: 1, max: 12 },
        style: {
          marginBottom: {hide: _ => true},
          aspectRatio: {_default: "4x3", options: ['1x1', '16x9', '4x3', '3x4', '6x4', '8x5', '7x5']},
        }
      },
    }
  },
}

