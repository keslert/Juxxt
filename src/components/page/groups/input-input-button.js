import React from 'react';
import Element from '../elements';
import { BasicButton, BasicInput } from '../elements/_blueprints';



class InputInputButton extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      //put the input here before the button
      //put second input here
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

export default InputInputButton

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    input: {
      name: BasicInput.name,
    },
    secondaryInput: {
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