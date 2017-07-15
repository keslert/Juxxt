import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Navbar1 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    
    const styleClassNames = convertStyleToAtomic({
      ...style,
      display: "flex",
      align: "center",
    });

    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={ colorClassNames + ' Navbar1'}>
        <div className={styleClassNames}>
          <div>
            <Element {...elements.logo} />
          </div>
          <div className="flex-1">
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
  inherits: ['NavigationSection'],
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
        { name: 'ButtonList', overrides: {elements: { buttons: { name: 'SmallButton', clones: { _default: 2 }}}}},
      ],
    },
    links: {
      options: ['HorizontalList']
    }
  },
  variants: []
}
