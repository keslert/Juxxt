import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer2 extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
      height: 60,
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + '  pl6 pr6 pt5 pb5 justify-between Footer2'}>
        <div className={styleClassNames + ' flex align-center'}>
          <div className={styleClassNames + 'tr'}>
            <Group {...groups.links} />
          </div>
          <div>
            <Group {...groups.text} />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer2;

export const blueprint = {
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
  variants: []
}