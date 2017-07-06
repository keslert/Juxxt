import React from 'react';
import Element from '../../elements';
import { BasicButton } from '../../elements/_blueprints';


class SmallButton extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <Element {...elements.button} />
      </div>
    )
  }
}

export default SmallButton;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    button: {
      name: SmallButton.name,
    },
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}