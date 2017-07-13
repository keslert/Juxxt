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
      height: '60px',
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={ colorClassNames + ' Navbar1'}>
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
  type: 'navigation',
  inherits: ['NavigationSection'],
  style: {},
  color: {},
  groups: {
    logo: {
      options: ['Logo']
    },
    button: {
      options: [
        { name: 'ButtonList', overrides: {elements: { buttons: { name: 'SmallButton' }}}},
      ],
    },
    links: {
      options: ['HorizontalList']
    }
  },
  variants: []
}
