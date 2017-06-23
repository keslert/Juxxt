import React from 'react';
import Group from '../../groups';
import { range } from 'lodash';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Navbar1 extends React.PureComponent {
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
      <div className={ colorClassNames + ' Navbar1'}>
        <div className={styleClassNames}>
          <Group {...groups.logo} />
          <Group {...groups.links} />
          <Group {...groups.button} />
        </div>
      </div>
    )
  }
}

export default Navbar1;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  groups: {
    logo: {
      options: ['Logo']
    },
    button: {
      options: ['Button2','Button1'],
    },
    links: {
      options: ['Hlist']
    }
  },
  variants: []
}
