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

      
    const paddingBottom = clamp(Math.floor(style.height * (style.verticalPosition / POSITIONS)), 1, style.height);
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
  image: { content: ['content'] },
  layout: {
    position: ['verticalPosition', 'horizontalPosition']
  },
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
    pattern: true,
    gradient: true,
    image: true,
  },
  groups: {
    item: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','IconHeadingParagraph','Heading'],
    },
  },
}