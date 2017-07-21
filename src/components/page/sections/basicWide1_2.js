import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import isNumber from 'lodash/isNumber';

const BasicWide1_2 = ({
  groups,
  elements,
  variant,
  style,
  color,
}) => {

  const containerStyle = {
    ...style,
  }

  const tpWrapClassNames = convertStyleToAtomic({
    width: '50P',
    order: variant.order,
    display: 'flex',
    align: 'center',
  });

  const isTpLeft = variant.order === 1;
  const tpBox = {
    marginLeft: isTpLeft ? 'auto' : 'inherit',
    paddingLeft: isTpLeft ? 0 : style.gutter,
    paddingRight: isTpLeft ? style.gutter : 'auto',
    maxWidth: isNumber(style.maxWidth) ? style.maxWidth / 2 : style.maxWidth,
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
    width: '100P',
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
        <Box className={tpWrapClassNames}>
          <Box className={convertStyleToAtomic(tpBox)}>
              <Group {...groups.tp} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default BasicWide1_2;

export const blueprint = {
  type: 'basic',
  inherits: ['GutterSection', 'BaseSection'],
  style: {},
  color: {},
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','HeadingParagraphButton', 'IconHeadingParagraph'],
    },
  },
  elements: {
    image: {
      name: 'CoverImage',
    },
  },
  variants: [{
    order: {
      options: [1, 3],
    }
  }]
}