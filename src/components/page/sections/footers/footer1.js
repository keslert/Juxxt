import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Footer1 extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
      height: 60,
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + ' pl6 pr6 vmiddle pt5 pb5 Footer1'}>
        <div className={styleClassNames}>
          <div>
            <Group {...groups.text} />
          </div>
          <div className="flex-auto tr">
            <Group {...groups.links} />
          </div>
          <div>
            <Group {...groups.button} />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer1;

export const blueprint = {
  inherits: [],
  style: {},
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
  variants: []
}