import React from 'react';
import { BasicButton } from '../elements/_blueprints';
import Element from '../elements';


class Button2 extends React.Component {
  render() {
    const { elements } = this.props;
    return (
    	<div className="dib mr4">
        <Element {...elements.button} />
        <Element {...elements.button} />
      </div>
    )
  }
}

export default Button2;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    button: {
      name: BasicButton.name,
    }
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}