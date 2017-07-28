import React from 'react';
import Element from '../elements';

class InputButton extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <div>
          <Element {...elements.input} />
        </div>
        <br></br>
        <div> 
          <Element {...elements.button} />
        </div>
      </div>
    )
  }
}

export default InputButton;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    input: { name: 'BasicInput' },
    button: { name: 'BasicButton' },
  },
}