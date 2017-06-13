import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';

class BlockImage extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <Element {...elements.image} />
      </div>
    )
  }
}
export default BlockImage;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
    }
  },
  variants: [],
}