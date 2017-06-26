import React from 'react';
import Group from '../../groups';
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
      <div className={ colorClassNames + ' pt3 pb3 Navbar1'}>
        <div className={styleClassNames}>
          <div>
            <Group {...groups.logo} />
          </div>
          <div className="flex-auto tr">
            <Group {...groups.links} />
          </div>
          <div>
            <Group {...groups.button} />
          </div>
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
      options: ['DoubleButton','SingleButton'],
    },
    links: {
      options: ['HorizontalList']
    }
  },
  variants: []
}