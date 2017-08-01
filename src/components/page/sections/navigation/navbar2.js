import React from 'react';
import Elements from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Navbar2 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;

    const colorClassNames = convertColorToAtomic(color);
    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingHorizontal: style.edgePadding,
      display: 'flex',
      justify: 'between',
      align: 'center',
      fixed: false,
    });

    const fixedClassNames = convertStyleToAtomic({fixed: style.fixed});
    return (
      <div className={colorClassNames + ' ' + fixedClassNames}>
        <div className={containerClassNames}>        
          <div>
            <Elements {...elements.logo} />
          </div>
          <div>
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
  inherits: ['NavigationSection', 'FixedSection', 'Section'],
  style: {},
  color: {
    background: 'default',
  },
  component: { navigation: ['navigation'] },
  elements: {
    logo: {
      name: 'LogoImage',
    },
  },
  groups: {
    buttonList: {
      options: [
        { name: 'ButtonList', elements: { buttons: { name: 'SmallButton'}}},
      ],
    },
  },
}
