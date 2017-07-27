import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import pick from 'lodash/pick';

class Basic1_2 extends React.Component {
  render() {
    const { elements, style, groups, color, image } = this.props;

    const mediaPercentage = Math.floor(100 - style.splitRatio);
    const mediaWrapClassNames = convertStyleToAtomic({
      width: Math.floor(mediaPercentage) + 'P',
      order: 2,
      paddingHorizontal: style.gutter,
    })

    const isTpLeft = style.order === 'left';
    const tpPercentage = Math.floor(style.splitRatio)
    const tpWrapClassNames = convertStyleToAtomic({
      width: tpPercentage + 'P',
      order: isTpLeft ? 1 : 3,
      display: 'flex',
      align: 'center',
      paddingHorizontal: style.gutter,
    })

    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingVertical: style.height,
      paddingHorizontal: style.edgePadding,
    });

    const wrapInnerClassNames = convertStyleToAtomic({
      marginHorizontal: style.constrained ? -style.gutter : 0,
      textAlign: style.constrained ? 'left' : 'center',
      display: "flex",
      flexWrap: "wrap",
      align: 'center',
    })

    const colorClassNames = convertColorToAtomic(color);

    const imageStyle = pick(style, ['crop', 'filter'])
    const imageClassNames = convertStyleToAtomic(imageStyle);

    return (
      <Box className={colorClassNames + ' ' + imageClassNames}>
        <Box className={containerClassNames}>
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
  inherits: ['Guttered', 'Ordered', 'BackgroundImageSection', 'ConstrainedSection', 'SplitRatioSection', 'Section'],
  color: {},
  style: {
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
    content: ['content'], 
  },
  layout: {
    splitRatio: ['splitRatio', 'constrained'],
  },
  elements: {},
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','HeadingParagraphButton', 'IconHeadingParagraph'],
    },
    media: {
      options: [
        'BlockImage', 
        'IpadMockup',
        'BrowserMockup',
        {
          name: 'Gallery', 
          elements: { images: { clones: { _default: 4, min: 2, max: 9 }}},
          _defaults: { style: { columns: 2 }},
        }
      ],
    },
  },
}
