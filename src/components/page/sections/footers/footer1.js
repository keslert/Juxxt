import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer1 extends React.PureComponent {
  render () {
    const { groups, style, color, variant } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }

    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + ' pl6 pr6 pt5 pb5 Footer1'}>
        <div className={styleClassNames }>
          <div className={"order-" + variant.order[0]}>
            <Group {...groups.text} />
          </div>
          <div className= {"order-2 flex-auto " + variant.linkAlign}>
            <Group {...groups.links} />
          </div>
          <div className = {"order-"  + variant.order[1] }>
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
  inherits: [],
  style: {
  },
  color: {},
  groups: {
    text: {
      options: ['ParagraphOnly']
    },
    button: {
      options: ['SingleButton'],
    },
    links: {
      options: ['HorizontalList']
    }
  },

  variants: [{
    order: {
      _default: [2,3],
      options: [[3,1],[2,3]],
    },
    linkAlign: {
      _default: 'tc',
      options: ['tc','tl', 'tr'],
    },
  }]
}