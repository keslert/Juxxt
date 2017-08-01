import React from 'react';
import Group from '../../groups';
import Element from '../../elements';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer2 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    
    const colorClassNames = convertColorToAtomic(color);
    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
      paddingHorizontal: style.edgePadding,
      display: 'flex',
      align: 'center',
    })

    return (
      <div className={colorClassNames}>
        <div className={containerClassNames}>
          <div className={'tr order-' + style.order}>
            <Group {...groups.links} />
          </div>
          <div className={'order-2'}>
            <Element {...elements.copyright} />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer2;

export const blueprint = {
  type: 'footer',
  inherits: ['ConstrainedSection', 'Section'],
  style: {
    order: {
      options: [1,3],
    },
  },
  color: {},
  component: { footer: ['footer'] },
  elements: {
    copyright: {
      name: 'Copyright',
    }
  },
  groups: {
    links: {
      options: ['HorizontalList']
    }
  },
}