/*

*/
import React from 'react';
import Element from '../elements';
import { BasicImage } from '../elements/_blueprints';

class IpadMockup extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div className="ipad">
        <Element {...elements.image} />
      </div>
    )
  }
}
export default IpadMockup;

export const blueprint = {
  inherits: ['Media'],
  style: {},
  layouts: {},
  color: {},
  elements: {
    image: {
      name: BasicImage.name,
    },
  },
}