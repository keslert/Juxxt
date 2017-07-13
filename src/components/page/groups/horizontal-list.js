import React from 'react';
import Element from '../elements';
import { ReadableLink } from '../elements/_blueprints';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';

class HorizontalList extends React.Component {
  render() {
    const { style, elements } = this.props;

    const innerStyles = {
      marginHorizontal: style.gutter,
    }
    const innerClassNames = convertStyleToAtomic(innerStyles)

    return (
      <div className={convertStyleToAtomic(style) + " flex flex-1"}>
        <div className={innerClassNames}>
          <Element {...elements.links} />
        </div>
        <div className={innerClassNames}>
          <Element {...elements.links} />
        </div>
        <div className={innerClassNames}>
          <Element {...elements.links} />
        </div>
      </div>
    )
  }
}
export default HorizontalList;

export const blueprint = {
  inherits: [],
  style: {
    gutter: {
      _default: 2,
      options: [0,1,2,3,4],
    },
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