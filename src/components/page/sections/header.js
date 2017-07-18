import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class Header extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);

    const containerClassNames = convertStyleToAtomic({
      parallax: style.parallax,
    });

    return (
      <div className={colorClassNames + ' Header ' + containerClassNames}>
        <div className={styleClassNames}>
          <Group {...groups.item} />
        </div>
      </div>
    )
  }
}

export default Header;

export const blueprint = {
  type: 'header',
  inherits: ['HeaderSection', /*'ParallaxSection'*/],
  style: {
    paddingTop: {
      _default: 8,
      options: [4,5,6,7,8],
    },
    paddingBottom: {
      _default: 6,
      options: [4,5,6,7,8],
    }
  },
  color: { background: 'vibrant' },
  groups: {
    item: {
      options: ['HeadingSubheadingButton', /* 'HeadingParagraphButton' */],
    },
  },
  variants: []
}
