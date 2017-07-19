import React from 'react';
import Element from '../elements';
import { BasicButton, BasicInput } from '../elements/_blueprints';

class NameEmailMessageForm extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <div>
          <Element {...elements.name} />
        </div>
        <div>
          <Element {...elements.email} />
        </div>
        <div>
          <Element {...elements.message} />
        </div>
        <div> 
          <Element {...elements.button} />
        </div>
      </div>
    )
  }
}

export default NameEmailMessageForm;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    name: {
      name: BasicInput.name,
      _defaults: {content: {placeholder: "name"}},
    },
    email: {
      name: BasicInput.name,
      _defaults: {content: {placeholder: "email"}},
    },
    message: {
      name: BasicInput.name,
      _defaults: {content: {placeholder: "message"}},
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