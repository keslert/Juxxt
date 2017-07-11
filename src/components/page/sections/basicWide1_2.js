import React from 'react';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

const BasicWide1_2 = ({
  groups,
  variant,
  style,
  color,
}) => {

  const containerStyle = {
    ...style,
  }

  const tpBox = {
    display: "flex",
    width: '40P',
    order: variant.order,
    flexWrap: "flex",
   
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
    //paddingHorizontal: style.gutter,
    width: '100P',
    //paddingHorizontal: 3,
    display: "flex",
    justify: 'center',
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
        <Box className={convertStyleToAtomic(tpBox) + " mauto"}>
          <Group {...groups.tp} />
        </Box>
      </Box>
    </Box>
  )
}
export default BasicWide1_2;

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