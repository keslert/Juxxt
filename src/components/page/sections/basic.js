import React from 'react';
import Group from '../groups';
import Container from './container';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';

import range from 'lodash/range';

const POSITIONS = 6;
class Basic extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const isTop = style.verticalPosition === 'top';
    const isMid = style.verticalPosition === 'middle';
    const isLeft = style.horizontalPosition === 'left';
    const isCenter = style.horizontalPosition === 'center';

      
    const paddingBottom = Math.floor(style.height * (style.verticalPosition / POSITIONS));
    const containerClassNames = convertStyleToAtomic({
      ...style,
      margin: 'auto',
      display: groups.item.name !== "Gallery" ? 'flex' : '',
      align: isTop ? "start" : isMid ? "center" : "end",
      justify: isLeft ? "start" : isCenter ? "center" : "end",
      minHeight: style.height,
      paddingHorizontal: style.edgePadding,
      paddingBottom: '-l-' + paddingBottom,
      paddingTop: '-l-' + (style.height - paddingBottom),
    })

    return (
      <Container style={style} color={color}>
        <div className={containerClassNames}>
          <div>
            <Group {...groups.item} />
          </div>
        </div>
      </Container>
    )
  }
}

export default Basic;

export const blueprint = {
  type: 'basic',
  inherits: ['BackgroundImageSection', 'Section'],
  style: {
    verticalPosition: {
      _default: POSITIONS / 2,
      options: range(1, POSITIONS),
    },
    horizontalPosition: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    },
  },
  color: {
    background: 'default',
  },
  groups: {
    item: {
      _default: 'KickerHeadingParagraphButton',
      options: ['HeadingButton','KickerHeadingButton', 'KickerHeadingSubheadingButton','HeadingSubheadingButton','IconHeadingButton','IconHeadingParagraphButton', 'HeadingParagraphButton','KickerHeadingParagraphButton','Heading','HeadingParagraph','HeadingSubheading', 'KickerHeading', 'KickerHeadingParagraph','KickerHeadingSubheading', 'IconHeadingParagraph','IconHeadingSubheading','Gallery','GalleryWide','Cards', 'ImageHeadingParagraph'],
    },
  },
  image: { content: ['content'] },
  layout: { position: ['verticalPosition', 'horizontalPosition'] },
  background: { 
    pattern: ['pattern'],
    gradient: ['gradient'],
    image: ['image'],
  },
  component: { 
    basic: ['basic', 'basicWide'], 
    header: ['header'], 
    action: ['action'],
    grid: ['grid'],
    gallery: ['gallery'],
  },
}