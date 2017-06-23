import React from 'react';
import Element from '../elements';
import { BasicButton } from '../elements/_blueprints';


class Button1 extends React.Component {
  render() {
    const { elements, variant, style, color } = this.props;
    return (
      <div className="fr mr4">
        <Element {...elements.button} />
      </div>
    )
  }
}

export default Button1

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    button: {
      name: BasicButton.name,
    },
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}