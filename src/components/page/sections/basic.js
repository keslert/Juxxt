import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import pick from 'lodash/pick';
import clamp from 'lodash/clamp';
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
      maxWidth: 'page',
      margin: 'auto',
      display: (groups.item.name === "Gallery" ? '' : 'flex'),
      align: (isTop ? "start" : isMid ? "center" : "end"),
      justify: (isLeft ? "start" : isCenter ? "center" : "end"),
      minHeight: style.height,
      paddingHorizontal: style.edgePadding,
      paddingBottom: '-l-' + paddingBottom,
      paddingTop: '-l-' + (style.height - paddingBottom), 
    })

    const colorClassNames = convertColorToAtomic(color);
    const imageStyle = pick(style, ['crop', 'filter', 'parallax'])
    const imageClassNames = convertStyleToAtomic(imageStyle);
    return (
      <div className={colorClassNames + ' ' + imageClassNames}>
        <div className={containerClassNames}>
          <div>
            <Group {...groups.item} />
          </div>
        </div>
      </div>
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
      options: ['HeadingButton','KickerHeadingButton', 'KickerHeadingSubheadingButton','HeadingSubheadingButton','IconHeadingButton','IconHeadingParagraphButton', 'HeadingParagraphButton','KickerHeadingParagraphButton','Heading','HeadingParagraph','HeadingSubheading', 'KickerHeading', 'KickerHeadingParagraph','KickerHeadingSubheading', 'IconHeadingParagraph','IconHeadingSubheading','Gallery','Cards', 'ImageHeadingParagraph'],
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
    basic: ['basic'], 
    header: ['header'], 
    action: ['action'],
    grid: ['grid'],
    gallery: ['gallery'],
  },
}