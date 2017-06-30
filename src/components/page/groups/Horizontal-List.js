import React from 'react';
import Element from '../elements';
import { ReadableLink } from '../elements/_blueprints';

class HorizontalList extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div className="dib">
        <Element {...elements.link} />
        <Element {...elements.link} />
        <Element {...elements.link} />
      </div>
    )
  }
}
export default HorizontalList;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    link: {
      name: ReadableLink.name,
    }
  },
  variants: [],
}