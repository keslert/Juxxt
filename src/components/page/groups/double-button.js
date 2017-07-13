import React from 'react';
import { BasicButton } from '../elements/_blueprints';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class DoubleButton extends React.Component {
  render() {
    const { style, elements } = this.props;

    const wrapClassNames = convertStyleToAtomic({
      ...style,
      display: 'flex',
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      marginHorizontal: style.gutter,
    });


    return (
      <div className={wrapClassNames}>
        <div className={boxClassNames}>
          <Element {...elements.button} />
        </div>
        <div className={boxClassNames}>
          <Element {...elements.secondaryButton} />
        </div>
      </div>
    )
  }
}

export default DoubleButton;

export const blueprint = {
  inherits: ['ListGutter'],
  style: {},
  color: {},
  elements: {
    button: {
      name: BasicButton.name,
    },
    secondaryButton: {
      name: BasicButton.name,
    }
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }],
}