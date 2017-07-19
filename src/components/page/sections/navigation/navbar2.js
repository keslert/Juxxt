import React from 'react';
import Elements from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Navbar2 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
      fixedNavBar: false,
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    const containerClassNames = convertStyleToAtomic({fixedNavBar: style.fixedNavBar});

    return (
      <div className={ colorClassNames + ' Navbar2 '+  containerClassNames }>
        <div className={styleClassNames}>
          <div>
            <Elements {...elements.logo} />
          </div>
          <div className="mla">
            <Group {...groups.buttonList} />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar2;

export const blueprint = {
  type: 'navigation',
  inherits: ['NavigationSection', 'FixedNavBar'],
  style: {},
  color: {},
  elements: {
    logo: {
      name: 'LogoImage',
    },
  },
  groups: {
    buttonList: {
      options: [
        { name: 'ButtonList', elements: { buttons: { name: 'SmallButton', clones: 2 }}},
      ],
    },
  },
  variants: []
}
