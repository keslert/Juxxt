import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer2 extends React.PureComponent {
  render () {
    const { groups, style, color, variant } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + '  pl6 pr6 pt5 pb5 justify-between Footer2'}>
        <div className={styleClassNames + ' flex align-center'}>
          <div className={styleClassNames + 'tr order-' + variant.order}>
            <Group {...groups.links} />
          </div>
          <div className={'order-2'}>
            <Group {...groups.text} />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer2;

export const blueprint = {
  type: 'footer',
  inherits: [],
  style: {},
  color: {},
  groups: {
    text: {
      options: ['ParagraphOnly']
    },
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