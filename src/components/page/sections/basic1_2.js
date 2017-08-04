import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Container from './container';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import range from 'lodash/range';

const POSITIONS = 6;
class Basic1_2 extends React.Component {
  render() {
    const { elements, style, groups, color, image } = this.props;

    const paddingBottom = Math.floor(style.height * (style.position / POSITIONS));
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


    return (
      <Container style={style} color={color}>
        <div className={containerClassNames}>
          <div className={wrapInnerClassNames}>
            <div className={tpWrapClassNames}>
              <Group {...groups.tp} />
            </div>
            <div className={mediaWrapClassNames}>
              <Group {...groups.media} />
            </div>
          </div>
        </div>
      </Container>
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
    background: 'default',
  },
  elements: {},
  groups: {
    tp: {
      options: ['HeadingButton','KickerHeadingButton', 'KickerHeadingSubheadingButton','HeadingSubheadingButton','IconHeadingButton','IconHeadingParagraphButton', 'HeadingParagraphButton','KickerHeadingParagraphButton','Heading','HeadingParagraph','HeadingSubheading', 'KickerHeading', 'KickerHeadingParagraph','KickerHeadingSubheading', 'IconHeadingParagraph','IconHeadingSubheading'],
    },
    media: {
      options: [
        'ImacMockup',
        'BlockImage', 
        'IpadMockup',
        'BrowserMockup',
        {
          name: 'Gallery', 
          style: { columns: 2 },
          elements: { 
            images: { 
              blueprint: { 
                clones: { _default: 4, min: 2, max: 9 }
              }
            }
          },
        }
      ],
    },
  },
  background: { 
    pattern: ['pattern'],
    gradient: ['gradient'],
    image: ['image'],
  },
  image: { content: ['content'] },
  layout: { splitRatio: ['splitRatio', 'constrained'] },
  component: { 
    basic: ['basic'], 
    header: ['header'], 
    action: ['action'],
    grid: ['grid'],
    gallery: ['gallery'],
  },
}
