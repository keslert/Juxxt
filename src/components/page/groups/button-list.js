import React from 'react';
import { BasicButton } from '../elements/_blueprints';
import Element from '../elements';

class ButtonList extends React.Component {
  render() {
    const { elements } = this.props;
    return (
    	<div className="dib">
        <Element {...elements.buttons} />
      </div>
    )
  }
}

export default ButtonList;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  elements: {
    buttons: {
      name: BasicButton.name,
      list: true,
      items: 2,
    },
  },
  variants: [],
}