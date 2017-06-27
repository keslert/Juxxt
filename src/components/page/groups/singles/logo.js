import React from 'react';
import Element from '../../elements';
import { LogoImage } from '../../elements/_blueprints';

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
      name: LogoImage.name,
    }
  },
  variants: [],
}