import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Navbar1 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    
    const linksClassNames = convertStyleToAtomic({
      display: 'flex',
      flex: 1,
      justify: style.linksAlign === 'left' ? 'start' : 'end',
    });

    const colorClassNames = convertColorToAtomic(color);
    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingHorizontal: style.edgePadding,
      display: 'flex',
      align: 'center',
      fixed: false,
    });

    const fixedClassNames = convertStyleToAtomic({fixed: style.fixed});
    return (
      <div className={colorClassNames + ' ' + fixedClassNames}>
        <div className={containerClassNames}>
          <div>
            <Element {...elements.logo} />
          </div>
          <div className={linksClassNames}>
            <Group {...groups.links} />
          </div>
          <div>
            <Group {...groups.buttonList} />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar1;

export const blueprint = {
  type: 'navigation',
  inherits: ['NavigationSection', 'FixedSection', 'Section'],
  style: {
    linksAlign: { options: ['left', 'right'] }
  },
  color: {
    background: 'default',
  },
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
    links: {
      options: ['HorizontalList']
    }
  },
}
