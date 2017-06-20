import React from 'react';
import { BasicHeading } from '../elements/_blueprints';
import TalkingPointComponent from './common/talking-point';

class ProductNavigation extends React.PureComponent {
  render() {
    const { elements, variant, style, color } = this.props;
    return(
      <TalkingPointComponent
      style={style}
      variant={variant}
      elements={elements}
      align={variant.align}
      color={color}
      />
    );
  }
}

export default ProductNavigation;

export const blueprint = {
  inherits: [],
  style: {},
  color: {
    background: "#64706c",
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    }
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}