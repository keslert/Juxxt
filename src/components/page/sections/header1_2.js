import React from 'react';
import Element from '../elements';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import Box from '../../common/box';




class Header1_2 extends React.PureComponent {
  render () {
  const { elements, groups, style, color, layout } = this.props;

  const containerStyle = {
    ...style
  }

  const wrapStyle = {
    marginHorizontal: `-${style.gutter}`,
    display: "flex",
    flexWrap: "wrap",
  }

  const innerBoxStyle = {
    paddingHorizontal: style.gutter,
    width: '50P',
    display: "flex",
    justify: "center",
    align: "center",

  }

  const colorClassNames = convertColorToAtomic(color);
  const innerClassNames = convertStyleToAtomic(innerBoxStyle);

  return (
    <Box className={colorClassNames + " tl"}>
      <Box className={convertStyleToAtomic(containerStyle) }>
        <Box className={convertStyleToAtomic(wrapStyle) }>
          <Box className={innerClassNames + ' order-' + layout.order}>
            <Group {...groups.tp} />
          </Box>
          <Box className={innerClassNames + ' order-2'}>
            <Element {...elements.media} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
  }
}

export default Header1_2;

export const blueprint = {
  type: 'header',
  inherits: ['HeaderSection', 'GutterSection', 'ParallaxSection', 'BaseSection'],
  style: {
    paddingTop: {
      _default: 6,
      options: [4,5,6,7,8],
    },
    paddingBottom: {
      _default: 6,
      options: [4,5,6,7,8],
    }
  },
  color: { background: 'vibrant' },
  elements: {
    media: {
      name: 'BasicImage',
    }
  },
  groups: {
    tp: {
      options: ['HeadingSubheadingButton', 'HeadingParagraphButton'],
    },
  },
  layouts: {
    order: { options: [1,3] }
  }
}
