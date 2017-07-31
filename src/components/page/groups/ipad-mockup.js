import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';
import { includes } from 'lodash';

const portrait = ['16x9', '4x3', '6x4', '8x5', '7x5'];

class IpadMockup extends React.Component {
  render() {
    const { elements } = this.props;
    
    return (

      <div className={includes(portrait,elements.image.style.aspectRatio) ? 'ipad-portrait' : 'ipad-vertical'}>
        <Element {...elements.image} />
      </div>
    )
  }
}
export default IpadMockup;

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