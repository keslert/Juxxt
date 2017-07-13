import React from 'react';
import { BasicButton } from '../elements/_blueprints';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class ButtonList extends React.Component {
  render() {
    const { style, elements } = this.props;

    const wrapClassNames = convertStyleToAtomic({
      ...style,
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      marginHorizontal: style.gutter,
    });

    return (
      <div className={wrapClassNames}>
        {[1,2].map((_, i) => (
          <div className={boxClassNames + ' dib'} key={i}>
            <Element {...elements.buttons} />
          </div>
        ))}
      </div>
    )
  }
}



export default ButtonList;

export const blueprint = {
  inherits: ['ListGutter'],
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