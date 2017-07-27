import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';
import { Heading } from './../../groups/heading';
import omit from 'lodash/omit';

class Navbar3 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    
    const colorClassNames = convertColorToAtomic(color);
    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingHorizontal: style.edgePadding,
      display: 'flex',
      align: 'center',
      direction: 'column',
    });

    return (
      <div className={colorClassNames}>
        <div className={containerClassNames}>
          <div>
            <Element {...elements.logo} />
          </div>
          <div>
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
  inherits: ['GutterSection', 'NavigationSection', 'FixedSection', 'Section'],
  style: {},
  color: {},
  elements: {
    logo: {
      name: 'LogoImage',
      _defaults: { style: {marginBottom: 2}}
    },
  },
  groups: {
    buttonList: {
      options: [
        { name: 'ButtonList', elements: { buttons: { name: 'SmallButton' }}},
      ],
    },
    links: {
      options: ['HorizontalList']
    }
  },
}
