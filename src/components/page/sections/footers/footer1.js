import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer1 extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;
    const boxStyle = {
      ...style,
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
      paddingHorizontal: style.edgePadding,
      display: "flex",
      align: "center",
      justify: "center",
    }

    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + ' Footer1'}>
        <div className={styleClassNames }>
          <div className={"order-" + style.order[0]}>
            <Element {...elements.copyright} />
          </div>
          <div className= {"order-2 flex-auto " + style.linkAlign}>
            <Group {...groups.links} />
          </div>
          <div className = {"order-"  + style.order[1] }>
            <Group {...groups.button} />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer1;

export const blueprint = {
  type: 'footer',
  inherits: ['ConstrainedSection', 'Section'],
  style: {
    order: {
      _default: [2,3],
      options: [[3,1],[2,3]],
    },
    linkAlign: {
      _default: 'tc',
      options: ['tc','tl', 'tr'],
    },
  },
  color: { background: 'vibrant' },
  component: { footer: ['footer'] },
  elements: {
    copyright: {
      name: 'Copyright',
    }
  },
  groups: {
    button: {
      options: ['ButtonList'],
    },
    links: {
      options: ['HorizontalList']
    }
  },
}