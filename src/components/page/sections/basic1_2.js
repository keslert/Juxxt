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

  const containerStyle = {
    ...style,
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
    <Box className={colorClassNames}>
      <Box className={convertStyleToAtomic(containerStyle)}>
        <Box className={convertStyleToAtomic(wrapStyle)}>
          <Box className={innerClassNames + ' order-' + variant.order}>
            <Group {...groups.tp} />
          </Box>
          <Box className={innerClassNames + ' order-2'}>
            <Group {...groups.media} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Basic1_2;

export const blueprint = {
  type: 'basic',
  inherits: ['BasicSection'],
  type: 'basic',
  style: {},
  color: {},
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton', 'IconHeadingParagraph'],
    },
    media: {
      options: ['BlockImage'],
    },
  },
  variants: [{
    order: {
      options: [1, 3],
    }
  }]
}