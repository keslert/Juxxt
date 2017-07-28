import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import pick from 'lodash/pick';

class Basic extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const isTop = style.position.vertical === 'top';
    const isMid = style.position.vertical === 'middle';
    const isLeft = style.position.horizontal === 'left';
    const isCenter = style.position.horizontal === 'center';

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
    const imageStyle = pick(style, ['crop', 'filter'])
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
  background: {
    color: 'default',
    pattern: true,
    gradient: true,
    image: true,
  },
  image: {
    content: true,
  },
  style: {

    height: {
      _default: 40,
      //options: [0,6,12,18,24,30,36,42],
      options: [10,20,30,40,50,60,70,80,90,100,110,120,130,140],
    },
    position: {
      _default: {vertical: 'middle', horizontal: 'center'},
      options: [
        {vertical: 'top', horizontal: 'left'}, 
        {vertical: 'top', horizontal: 'center'},
        {vertical: 'top', horizontal: 'right'},
        {vertical: 'middle', horizontal: 'left'},
        {vertical: 'middle', horizontal: 'center'},
        {vertical: 'middle', horizontal: 'right'},
        {vertical: 'bottom', horizontal: 'left'},
        {vertical: 'bottom', horizontal: 'center'},
        {vertical: 'bottom', horizontal: 'right'},
      ]
    },
  },
  color: {},
  groups: {
    item: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','IconHeadingParagraph','Heading'],
    },
  },
}