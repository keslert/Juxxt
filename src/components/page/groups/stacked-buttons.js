import React from 'react';
import { BasicButton } from '../elements/_blueprints';
import Element from '../elements';


class StackedButtons extends React.Component {
  render() {
    const { elements } = this.props;
    return (
    	<div>
        <div className="mr3">
          <Element {...elements.button} />
        </div>
        <div>
          <Element {...elements.secondaryButton} />
        </div>
      </div>
    )
  }
}

export default StackedButtons;

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
  layout: {},
}