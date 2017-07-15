import React from 'react';
import Element from '../elements';
import { ReadableLink, ListTitle } from '../elements/_blueprints';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';

class VerticalList extends React.Component {
  render() {
    const { style, elements } = this.props;

    const innerStyles = {
      marginVertical: style.gutter,
    }
    const innerClassName = convertStyleToAtomic(innerStyles)

    return (
      <div className={convertStyleToAtomic(style)}>
        <Element {...elements.title} />
        {elements.links.clones.map((link, i) => (
          <div className={innerClassName} key={i}>
            <Element {...link} />
          </div>
        ))}
      </div>
    )
  }
}

export default VerticalList;

export const blueprint = {
  inherits: [],
  style: {
    gutter: {
      _default: 2,
      options: [0,1,2,3,4],
    },
  },
  color: {},
  elements: {
  	title: {
  		name: ListTitle.name,
  	},
    links: {
      name: ReadableLink.name,
      clones: { _default: 3 },
    }
  },
  variants: [],
}