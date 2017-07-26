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

    const boxStyle = {
      

    }

    const wrapClassNames = convertStyleToAtomic({
      maxWidth: 'page',
      margin: 'auto',
      display: (groups.item.name === "Gallery" ? '' : 'flex'),
      align: (isTop ? "start" : isMid ? "center" : "end"),
      justify: (isLeft ? "start" : isCenter ? "center" : "end"),
      minHeight: layout.height,

      // paddingBottom: '-l-' + layout.height / (isTop ? (3/2) : isMid ? 2 : 3),
      // paddingTop: '-l-' + layout.height / (isTop ? 3 : isMid ? 2 : (3/2)),
      paddingBottom: '-l-' + layout.height * (.2),
      paddingTop: '-l-' + layout.height * (.2),
    
    })

    const colorClassNames = convertColorToAtomic(color);
    const styleClassNames = convertStyleToAtomic(boxStyle);

    return (
      <div className={colorClassNames}>
        <div className={wrapClassNames}>
          <div className = {styleClassNames}>
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
  inherits: ['BasicSection', 'BaseSection', 'ParallaxSection'],
  layouts: {
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