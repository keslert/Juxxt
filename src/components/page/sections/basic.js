import React from 'react';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';




class Basic extends React.PureComponent {
  render () {
    const { groups, variant, style, color } = this.props;

    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames + ' Basic'}>
        <div className={styleClassNames}>
          <Group {...groups.item} />
        </div>
      </div>
    )
  }
}

export default Basic;

export const blueprint = {
  inherits: ['BasicSection'],
  style: {},
  color: {},
  groups: {
    item: {
      options: ['HeadingParagraph', 'HeadingSubheading'],
    },
  },
  variants: []
}