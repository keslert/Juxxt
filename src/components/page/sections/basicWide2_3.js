import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

const BasicWide2_3 = ({
  elements,
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
    width: '66P',
    order: variant.order,
    flexWrap: "flex",
   
  }

  const imageBox = {
    width: '33P',
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
          <Element {...elements.image} />
        </Box>
        <Box className={convertStyleToAtomic(tpBox) + " mauto"}>
          <Group {...groups.tp} />
        </Box>
      </Box>
    </Box>
  )
}
export default BasicWide2_3;

export const blueprint = {
  type: 'basic',
  inherits: ['BasicSection'],
  style: {},
  color: {},
  elements: {
    image: {
      name: 'CoverImage',
    }
  },
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','HeadingParagraphButton', 'IconHeadingParagraph'],
    },
  },
  variants: [{
    order: {
      options: [1, 3],
    }
  }]
}