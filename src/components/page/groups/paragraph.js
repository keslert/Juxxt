import React from 'react';
import Element from '../elements';
import { BasicSubheading } from '../elements/_blueprints';


class ParagraphOnly extends React.PureComponent {
    render() {
    const { elements } = this.props;
    return (
      <div>
        <Element {...elements.paragraph} />
      </div>
    )
  }
}

export default ParagraphOnly;

export const blueprint = {
  inherits: [],
  style: {},
  variant: [],
  color: {},
  elements: {
    paragraph: {
      name: BasicSubheading.name,
    },
  },
  variants: [],
}