import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import pick from 'lodash/pick';
import clamp from 'lodash/clamp';
import range from 'lodash/range';

const POSITIONS = 6;
class Basic1_2 extends React.Component {
  render() {
    const { elements, style, groups, color, image } = this.props;

    const paddingBottom = clamp(Math.floor(style.height * (style.position / POSITIONS)), 1, style.height);
    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingBottom: '-l-' + paddingBottom,
      paddingTop: '-l-' + (style.height - paddingBottom),
      paddingHorizontal: style.edgePadding,
    });

    const wrapInnerClassNames = convertStyleToAtomic({
      marginHorizontal: style.constrained ? -style.gutter : 0,
      textAlign: style.constrained ? 'left' : 'center',
      display: "flex",
      flexWrap: "wrap",
      align: 'center',
    })

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
  style: {
    position: {
      _default: POSITIONS / 2,
      options: [1, POSITIONS - 1, ...range(2, POSITIONS - 2)], // 
    }
  },
  color: {
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
  component: { basic: ['basic'], header: ['header'], action: ['action'] },
  elements: {},
  groups: {
    tp: {
      options: ['HeadingButton','KickerHeadingButton', 'KickerHeadingSubheadingButton','HeadingSubheadingButton','IconHeadingButton','IconHeadingParagraphButton', 'HeadingParagraphButton','KickerHeadingParagraphButton','Heading','HeadingParagraph','HeadingSubheading', 'KickerHeading', 'KickerHeadingParagraph','KickerHeadingSubheading', 'IconHeadingParagraph','IconHeadingSubheading'],
    },
    media: {
      options: [
        'ImacMockup',
        'BlockImage', 
        'Shadow',
        'IpadMockup',
        'BrowserMockup',
        {
          name: 'Gallery', 
          style: { columns: 2 },
          elements: { images: { 
            blueprint: { 
              clones: { _default: 4, min: 2, max: 9 }
            }
          }},
        }
      ],
    },
  },
}
