import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import Container from '../container';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { Heading } from './../../groups/heading';
import omit from 'lodash/omit';

class Navbar3 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    
    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
      paddingHorizontal: style.edgePadding,
      display: 'flex',
      align: 'center',
      direction: 'column',
      fixed: false,
    });

    const fixedClassNames = convertStyleToAtomic({fixed: style.fixed});
    return (
      <Container style={style} color={color} classNames={fixedClassNames} noBackgroundImage>
        <div className={containerClassNames}>
          <div>
            <Element {...elements.logo} />
          </div>
          <div>
            <Group {...groups.links} />
          </div>
        </div>
      </Container>
    )
  }
}


export default Navbar3;

export const blueprint = {
  type: 'navigation',
  inherits: ['GutterSection', 'NavigationSection', 'FixedSection', 'Section'],
  style: {
    height: {
      _default: 2,
      options: [0,6,2,4],
    }
  },
  color: {
    background: 'default',
  },
  component: { navigation: ['navigation'] },
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
