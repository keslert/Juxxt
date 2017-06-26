import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import Box from '../../common/box';




class Header1_2 extends React.PureComponent {
  render () {
    const { groups, style, color, variant } = this.props;

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
    <Box className={colorClassNames + " h-40e tl"}>
      <Box className={convertStyleToAtomic(containerStyle) }>
        <Box className={convertStyleToAtomic(wrapStyle) }>
          <Box className={innerClassNames + ' tl order-' + variant.order}>
            <Group {...groups.tp} />
          </Box>
          <Box className={innerClassNames + ' h-32e order-2'}>
            <Group {...groups.media} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
  }
}

export default Header1_2;

export const blueprint = {
  inherits: ['BasicSection'],
  style: {},
  color: {},
  groups: {
    tp: {
      options: ['HeadingSubheadingButton','HeadingParagraphButton']
    },
    media: {
      options: ['BlockImage']
    }
  },
  variants: []
}