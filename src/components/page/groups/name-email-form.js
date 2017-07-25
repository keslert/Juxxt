import React from 'react';
import Element from '../elements';

class NameEmailForm extends React.Component {
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
    name: {
      name: 'BasicInput',
      _defaults: {content: {placeholder: "name"}},
    },
    email: {
      name: 'BasicInput',
      _defaults: {content: {placeholder: "email"}},
    },
    button: {
      name: 'BasicButton',
    },
  },
  layout: {
    align: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  },
}