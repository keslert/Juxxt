import React from 'react';
import Element from '../../elements';
import { CoverImage } from '../../elements/_blueprints';

class CoverImageGroup extends React.Component {
  render() {
    const { elements } = this.props;
    return (

      <div>
        <Element {...elements.image} />
      </div>
    )
  }
}
export default CoverImageGroup;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    image: {
      name: CoverImage.name,
    }
  },
  variants: [],
}