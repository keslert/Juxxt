import React from 'react';
import Element from '../elements';
import { range } from 'lodash';
import { BasicImage } from '../elements/_blueprints';

class Logo extends React.Component {
  render() {
 const { elements } = this.props;

    return (
        <Element {...elements.image} />
    )
  }
}
export default Logo;

export const blueprint = {
  inherits: [],
  style: {
    
  },
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
    }
  },
  variants: [],
}