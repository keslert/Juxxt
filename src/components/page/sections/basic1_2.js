import React from 'react';
import Group from '../groups';
import Box from '../../common/box';

const Basic1_2 = ({
  groups,
  variant,
  style,
}) => {

  const boxStyle = {
    ...style,
    display: "flex",
    align: "center",
    marginHorizontal: `-${style.gutter}`,
  }

  const innerBoxStyle = {
    flex: 1,
    paddingHorizontal: style.gutter,
  }

  return (
    <Box background={style.sectionBackground}>
      <Box {...boxStyle}>
        <Box {...innerBoxStyle} order={variant.order}>
          <Group {...groups.tp} />
        </Box>
        <Box {...innerBoxStyle} order={2}>
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
  groups: {
    tp: {
      options: ['HeadingParagraph'],
    },
    media: {
      options: ['HeadingParagraph'],
    },
  },
  variants: [{
    order: [1, 3],
  }]
}