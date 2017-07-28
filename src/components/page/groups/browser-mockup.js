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
    },
  },
}