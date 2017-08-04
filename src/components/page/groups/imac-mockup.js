import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';

class ImacMockup extends React.Component {
  render() {
    const { elements } = this.props;

    return (
      <div className="iMac">
        <div className="body">
          <div className="screen">
            <Element {...elements.image} />
          </div>
        </div>
        <div className="stand"/>
      </div>
    )
  }
}
export default ImacMockup;

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
            _default: '16x9',
            options: ['16x9', '6x4', '8x5'],
          }
        }
      }
    },
  },
}