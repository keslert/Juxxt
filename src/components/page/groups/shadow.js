import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';

class Shadow extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div className={"shadow-3"}>
        <Element {...elements.image} />
      </div>
    )
  }
}
export default Shadow;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
    },
  },
}