import React from 'react';
import Element from '../elements';
import { ReadableLink, ListTitle } from '../elements/_blueprints';

class VerticalList extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div className="dib flex" >
      <div className="flex-column tl ">
      	<Element {...elements.title} />
        <Element {...elements.link} />
        <Element {...elements.link} />
        <Element {...elements.link} />
      </div>
      </div>
    )
  }
}

export default VerticalList;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
  	title: {
  		name: ListTitle.name,
  	},
    link: {
      name: ReadableLink.name,
    }
  },
  variants: [],
}