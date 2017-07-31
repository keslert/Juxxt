import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';

class BrowserMockup extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div className={"browser-mockup"}>
        <Element {...elements.image} />
      </div>
    )
  }
}
export default BrowserMockup;

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
            options: ['16x9', '4x3', '6x4', '8x5', '7x5'],
          }
        }
      }
    },
  },
}