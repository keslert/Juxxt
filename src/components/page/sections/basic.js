import React from 'react';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

const Basic = ({
  groups,
  variant,
  style,
  color,
}) => {

  const boxStyle = {
    ...style,
    display: "flex",
    align: "center",
    justify: "center",
  }
  const styleClassNames = convertStyleToAtomic(boxStyle);
  const colorClassNames = convertColorToAtomic(color);

  return (
    <Box background={style.sectionBackground}>
      <Box className={styleClassNames + ' ' + colorClassNames}>
        <Group {...groups.item} />
      </Box>
    </Box>
  )
}

export default Basic;

export const blueprint = {
  inherits: ['BasicSection'],
  style: {},
  groups: {
    item: {
      options: ['HeadingParagraph'],
    },
  },
  variants: []
}