import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';




class Basic extends React.PureComponent {
  render () {
    const { groups, layout, color } = this.props;

    const isTop = layout.position.vertical === 'top';
    const isMid = layout.position.vertical === 'middle';

    const isLeft = layout.position.horizontal === 'left';
    const isCenter = layout.position.horizontal === 'center';
    const wrapClassNames = convertStyleToAtomic({
      maxWidth: 'page',
      margin: 'auto',
      paddingBottom: '-l-' + layout.height / (isTop ? 3 : isMid ? 2 : (3/2)),
      paddingTop: '-l-' + layout.height / (isTop ? (3/2) : isMid ? 2 : 3),
    })

    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames}>
        <div className={wrapClassNames}>
          <Group {...groups.item} />
        </div>
      </div>
    )
  }
}

export default Basic;

export const blueprint = {
  type: 'basic',
  inherits: ['BasicSection', 'BaseSection', 'ParallaxSection'],
  layouts: {
    height: {
      _default: 24,
      options: [0,6,12,18,24,30,36,42],
    },
    position: {
      _default: {vertical: 'top', horizontal: 'left'},
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
  style: {},
  color: {},
  groups: {
    item: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','IconHeadingParagraph','Gallery','Heading'],
    },
  },
}