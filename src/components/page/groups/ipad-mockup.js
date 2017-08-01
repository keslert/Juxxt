import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';
import { includes } from 'lodash';

const portrait = ['16x9', '4x3', '6x4', '8x5', '7x5'];

class IpadMockup extends React.Component {
  render() {
    const { elements } = this.props;
    const isPortrait = includes(portrait,elements.image.style.aspectRatio);
    return (

      <div className={ isPortrait ? 'ipad-portrait' : 'ipad-vertical'}>
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
      blueprint: {
        style: {
          aspectRatio: {
            _default: '4x3',
            options: ['16x9', '4x3', '3x4', '6x4', '8x5', '7x5'],
          }
        }
      }
    },
  },
}