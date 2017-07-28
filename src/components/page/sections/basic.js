import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import pick from 'lodash/pick';

class Basic extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const isTop = style.verticalPosition === 'top';
    const isMid = style.verticalPosition === 'middle';
    const isLeft = style.horizontalPosition === 'left';
    const isCenter = style.horizontalPosition === 'center';

    const containerClassNames = convertStyleToAtomic({
      maxWidth: 'page',
      margin: 'auto',
      display: (groups.item.name === "Gallery" ? '' : 'flex'),
      align: (isTop ? "start" : isMid ? "center" : "end"),
      justify: (isLeft ? "start" : isCenter ? "center" : "end"),
      minHeight: style.height,
      paddingHorizontal: style.edgePadding,
      paddingBottom: '-l-' + style.height * (.2),
      paddingTop: '-l-' + style.height * (.2),    
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

    height: {
      _default: 40,
      options: [10,140,20,30,40,50,60,70,80,90,100,110,120,130],
    },
    verticalPosition: {
      _default: 'middle',
      options: ['top', 'middle', 'bottom'],
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