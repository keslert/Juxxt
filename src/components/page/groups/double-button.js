import React from 'react';
import { BasicButton } from '../elements/_blueprints';
import Element from '../elements';


class DoubleButton extends React.Component {
  render() {
    const { elements } = this.props;
    return (
    	<div>
        <Element {...elements.button} />
        <Element {...elements.secondaryButton} />
      </div>
    )
  }
}

export default DoubleButton;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    button: {
      name: BasicButton.name,
    },
    secondaryButton: {
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