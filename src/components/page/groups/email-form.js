import React from 'react';
import Element from '../elements';
import { BasicButton, BasicInput } from '../elements/_blueprints';

class EmailForm extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <div>
          <Element {...elements.email} />
        </div>
        <div> 
          <Element {...elements.button} />
        </div>
      </div>
    )
  }
}

export default EmailForm;

export const blueprint = {
  inherits: ['TextAlignment'],
  style: {},
  color: {},
  elements: {
    email: {
      name: BasicInput.name,
      _defaults: {content: {placeholder: "email"}},
    },
    button: {
      name: BasicButton.name,
    },
  },
}