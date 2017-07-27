import React from 'react';
import Element from '../elements';

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
  inherits: ['TextAligned'],
  style: {},
  color: {},
  elements: {
    name: {
      name: 'BasicInput',
      _defaults: {content: {placeholder: "name"}},
    },
    email: {
      name: 'BasicInput',
      _defaults: {content: {placeholder: "email"}},
    },
    message: {
      name: 'BasicInput',
      _defaults: {content: {placeholder: "message"}},
    },
    button: {
      name: 'BasicButton',
    },
  },
}