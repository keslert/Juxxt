import React from 'react';
import Element from '../elements';
import { ReadableLink } from '../elements/_blueprints';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';

class HorizontalList extends React.Component {
  render() {
    const { style, elements } = this.props;

    const wrapClassNames = convertStyleToAtomic({
      ...style,
      display: 'flex',
      flex: 1,
    })


    const boxClassNames = convertStyleToAtomic({
      marginHorizontal: style.gutter,
      display: 'inline-block',
    })

    return (
      <div className={wrapClassNames}>
        <div className={boxClassNames}>
          <Element {...elements.links} />
        </div>
        <div className={boxClassNames}>
          <Element {...elements.links} />
        </div>
        <div className={boxClassNames}>
          <Element {...elements.links} />
        </div>
      </div>
    )
  }
}
export default HorizontalList;

export const blueprint = {
  inherits: ['ListGutter'],
  style: {
    marginHorizontal: {
      _default: 2,
      options: [0,1,2,3,4],
    }
  },
  color: {},
  elements: {
    links: {
      name: ReadableLink.name,
      list: true,
      _default: 3,
    }
  },
  variants: [],
}