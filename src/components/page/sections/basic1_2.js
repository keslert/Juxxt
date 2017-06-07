import React from 'react';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

const Basic1_2 = ({
  groups,
  variant,
  style,
  color,
}) => {

  const boxStyle = {
    ...style,
    display: "flex",
    flexWrap: "wrap",
    marginHorizontal: `-${style.gutter}`,
  }

  const innerBoxStyle = {
    paddingHorizontal: style.gutter,
    width: '50P',
    display: "flex",
    justify: "center",
    align: "center",
  }

  const colorClassNames = convertColorToAtomic(color);
  const boxClassNames = convertStyleToAtomic(boxStyle)
  const innerClassNames = convertStyleToAtomic(innerBoxStyle);

  return (
    <Box className={colorClassNames}>
      <Box className={boxClassNames}>
        <Box order={variant.order} className={innerClassNames}>
          <Group {...groups.tp} />
        </Box>
        <Box order={2} className={innerClassNames}>
          <Group {...groups.media} />
        </Box>
      </Box>
    </Box>
  )
}
export default Basic1_2;

export const blueprint = {
  inherits: ['BasicSection'],
  style: {},
  color: {},
  groups: {
    tp: {
      options: ['HeadingParagraph'],
    },
    media: {
      options: ['BlockImage'],
    },
  },
  variants: [{
    order: [1, 3],
  }]
}