import React from 'react';
import Element from '../elements';
import { BasicLink } from '../elements/_blueprints';

class Hlist extends React.Component {
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
export default Hlist;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    link: {
      name: BasicLink.name,
    }
  },
  variants: [],
}