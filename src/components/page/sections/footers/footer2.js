import React from 'react';
import Group from '../../groups';
import Element from '../../elements';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer2 extends React.PureComponent {
  render () {
    const { elements, groups, style, color, variant } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + ' Footer2'}>
        <div className={styleClassNames + ' flex align-center'}>
          <div className={'tr order-' + variant.order}>
            <Group {...groups.links} />
          </div>
          <div className={'order-2'}>
            <Element {...elements.copyright} />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer2;

export const blueprint = {
  type: 'footer',
  inherits: ['BasicSection'],
  style: {},
  color: {},
  elements: {
    copyright: {
      name: 'Copyright',
    }
  },
  groups: {
    links: {
      options: ['HorizontalList']
    }
  },
  variants: [{
    order: {
      options: [1,3],
    }
  }]
}