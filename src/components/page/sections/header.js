import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';




class Header extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames + ' Basic'}>
        <div className={styleClassNames}>
          <Group {...groups.item} />
        </div>
      </div>
    )
  }
}

export default Header;

export const blueprint = {
  inherits: ['BasicSection'],
  style: {},
  color: {},
  groups: {
    item: {
      options: ['HeadingButton'],
    },
  },
  variants: []
}