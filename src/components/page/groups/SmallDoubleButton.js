import React from 'react';
import { SmallButton } from '../elements/_blueprints';
import Element from '../elements';


class SmallDoubleButton extends React.Component {
  render() {
    const { elements } = this.props;
    return (
    	<div className="dib">
        <div className="mr3">
          <Element {...elements.button} />
        </div>
        <Element {...elements.secondaryButton} />
      </div>
    )
  }
}

export default SmallDoubleButton;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    button: {
      name: SmallButton.name,
    },
    secondaryButton: {
      name: SmallButton.name,
    }
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}