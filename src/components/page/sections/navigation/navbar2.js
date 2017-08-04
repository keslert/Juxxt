import React from 'react';
import Elements from '../../elements';
import Group from '../../groups';
import Container from '../container';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class Navbar2 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;

    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
      paddingHorizontal: style.edgePadding,
      display: 'flex',
      justify: 'between',
      align: 'center',
      fixed: false,
    });

    const fixedClassNames = convertStyleToAtomic({fixed: style.fixed});
    return (
      <Container style={style} color={color} classNames={fixedClassNames} noBackgroundImage>
        <div className={containerClassNames}>        
          <div>
            <Elements {...elements.logo} />
          </div>
          <div>
            <Group {...groups.buttonList} />
          </div>
        </div>
      </Container>
    )
  }
}

export default Navbar2;

export const blueprint = {
  type: 'navigation',
  inherits: ['NavigationSection', 'FixedSection', 'Section'],
  style: {
    height: {
      _default: 0,
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
