import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';


class Basic1_2 extends React.Component {
  render() {
    const { elements, style, groups, layout, color } = this.props;

    const mediaPercentage = Math.floor(100 - layout.splitRatio.ratio);
    const mediaWrapClassNames = convertStyleToAtomic({
      width: Math.floor(mediaPercentage) + 'P',
      order: 2,
      paddingHorizontal: layout.gutter,
    })

    const isTpLeft = layout.order === 'left';
    const tpPercentage = Math.floor(layout.splitRatio.ratio)
    const tpWrapClassNames = convertStyleToAtomic({
      width: tpPercentage + 'P',
      order: isTpLeft ? 1 : 3,
      display: 'flex',
      align: 'center',
      paddingHorizontal: layout.gutter,
    })

    const isConstrained = layout.splitRatio.constrained;
    const wrapClassNames = convertStyleToAtomic({
      maxWidth: isConstrained ? 'page' : 'inherit',
      margin: 'auto',
      paddingVertical: layout.height,
    });

    const wrapInnerClassNames = convertStyleToAtomic({
      marginHorizontal: isConstrained ? -layout.gutter : 0,
      display: "flex",
      flexWrap: "wrap",
      textAlign: isConstrained ? 'left' : 'center',
      align: 'center',
    })

    const colorClassNames = convertColorToAtomic(color);

    return (
      <Box className={colorClassNames}>
        <Box className={wrapClassNames}>
          <Box className={wrapInnerClassNames}>
            <Box className={tpWrapClassNames}>
              <Group {...groups.tp} />
            </Box>
            <Box className={mediaWrapClassNames}>
              <Group {...groups.media} />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}
export default Basic1_2;

export const blueprint = {
  type: 'basic',
  inherits: ['BasicSection', 'GutterSection', 'BaseSection', 'OverlaySection'],
  color: {},
  layouts: {
    order: {
      options: ['left', 'right'],
    },
    gutter: {
      _default: 4,
      options: [0,1,2,3,4,5],
    },
    splitRatio: {
      _default: {ratio: 50, constrained: true},
      options: [
        {ratio: 33, constrained: true},
        {ratio: 50, constrained: true},
        {ratio: 66, constrained: true},
        {ratio: 33, constrained: false},
        {ratio: 50, constrained: false},
        {ratio: 66, constrained: false},
      ]
    },
    height: {
      _default: 5,
      options: [0,2,4,5,6,7,8],
    },
  },
  background: {
    color: 'default',
    pattern: true,
    gradient: true,
    image: true,
  },
  image: {
    content: true,
    filter: true,
    crop: {
      _default: 'center center',
      options: ['left top', 'left center', 'left bottom', 'center top', 'center center', 'center bottom', 'right top', 'right center', 'right bottom']
    },
  },
  elements: {},
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','HeadingParagraphButton', 'IconHeadingParagraph'],
    },
    media: {
      options: ['BlockImage', 'Gallery'],
    },
  },
  style:{},
}
