import React from 'react';
import Element from '../elements';
import { BasicButton } from '../elements/_blueprints';
import { BasicInput } from "../elements/_blueprints";


class InputButton extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      //put input here
      <div>
        <Element {...elements.input} /> 
        <Element {...elements.button} />
      </div>
    )
  }
}

export default InputButton

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