import React from 'react';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

const Basic1_2Wide = ({
  groups,
  variant,
  style,
  color,
}) => {

  const containerStyle = {
    ...style,
  }

  const tpBox = {
    maxWidth: style.maxWidth / 2,
    width: '50P',
    order: variant.order,
  }

  const imageBox = {
    width: '50P',
    order: 2,
  }

  const wrapStyle = {
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
      <Box className={convertStyleToAtomic(wrapStyle)}>
        <Box className={convertStyleToAtomic(imageBox)}>
          <Group {...groups.image} />
        </Box>
        <Box className={convertStyleToAtomic(tpBox)}>
          <Group {...groups.tp} />
        </Box>
      </Box>
    </Box>
  )
}
export default Basic1_2Wide;

export const blueprint = {
  type: 'basic',
  inherits: ['BasicSection'],
  style: {},
  color: {},
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','HeadingParagraphButton', 'IconHeadingParagraph'],
    },
    image: {
      options: ['CoverImage'],
    },
  },
  variants: [{
    order: {
      options: [1, 3],
    }
  }]
}