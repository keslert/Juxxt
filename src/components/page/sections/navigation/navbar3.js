import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';
import { Heading } from './../../groups/heading';

class Navbar3 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    
    const styleClassNames = convertStyleToAtomic({
      ...style,
      display: "flex",
      align: "center",
    });

    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={ colorClassNames + ' Navbar3'+ ' justify-center'}>
        <div className={styleClassNames + ' justify-center'}>
            <Element {...elements.logo} />
        </div>
        <div className={styleClassNames + ' justify-center'}>
          <div className="flex flex-1 justify-center">
            <Group {...groups.links} />
          </div>

        </div>
      </div>
    )
  }
}


export default Navbar3;

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
        //{ name: 'Logo', overrides: {align:  'center' }},
      ],
    },
    links: {
      options: ['HorizontalList']
    }
  },
  variants: []
}
