import React from 'react';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class Gallery extends React.PureComponent {
  render () {
    const { style, color, elements, layout } = this.props;
    
    const boxStyle = {
      display: "flex",
      align: "center",
      justify: "center",
      flex: "wrap",
      marginHorizontal: -style.gutter,
    }
    const divStyle = {
      ...style,
      padding: style.gutter,
      width: Math.floor(100 / (layout.columns)) + 'P',
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
  inherits: ['ListGutter', 'BaseGroup'],
  style: {},
  color: {},
  elements: {
    images: {
      name: 'GalleryImage',
      clones: {_default: 6, min: 1, max: 12},
    }
  },
  layouts: {
    columns: {
      _default: 3,
      options: [2,3,4,5,6],
    }
  }
}

