import React from 'react';
import Element from '../elements';
import { BasicButton, BasicInput } from '../elements/_blueprints';

class NameEmailForm extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <div>
          <Element {...elements.input} />
        </div>
        <div>
          <Element {...elements.input} />
        </div>
        <div> 
          <Element {...elements.button} />
        </div>
      </div>
    )
  }
}

export default NameEmailForm;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    input: {
      name: BasicInput.name,
    },
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