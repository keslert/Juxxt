import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class Grid extends React.PureComponent {
  render () {
    const { style, color, groups } = this.props;

    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingVertical: style.height,
      paddingHorizontal: style.edgePadding,
      margin: 'auto',
      maxWidth: 'page',
    });
    const colorClassNames = convertColorToAtomic(color);
    const itemClassNames = convertStyleToAtomic({
      display: "flex",
      flex: "wrap",
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      width: Math.floor(100 / (style.columns)) + 'P',
      paddingHorizontal: style.gutter,
    });

    const tpClassNames = convertStyleToAtomic({
      textAlign: "center",
    });

    return (
      <div className={colorClassNames + ' Grid'}>
        <div className={containerClassNames}>
          <div className={itemClassNames}>
            {groups.gridItem.clones.map((group, i) => (
              <div className={boxClassNames} key={i}>
                <Group {...group} className={"w-100P"}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Grid;


const gridItem = {
  name: 'HeadingParagraph', 
  elements: {
    heading: { 
      name:'SmallHeading'
    }
  },
  blueprint: { 
    clones: { _default: 3, min: 1, max: 12 },
  },
}

export const blueprint = {
  type: 'basic',
  inherits: ['Guttered', 'Columned', 'Section'],
  style: {
    height: { _default: 2, options: [0,1,2,3,4,5,6,7,8] }
  },
  color: {
    color: 'default',
    pattern: true,
    gradient: true,
  },
  groups: {
    gridItem: {
      _default: gridItem,
      options: [
        gridItem,
        {...gridItem, name: 'HeadingParagraphLink'},
        {...gridItem, name: 'IconHeadingParagraph'},
        {
          name: 'ImageHeadingParagraph', 
          groups: { tp: { options: [
            {name: 'HeadingParagraph', blueprint: { clones: {_default: 3, min: 1, max: 12}}, elements: {heading: {name:'SmallHeading'}}}
          ]}},
          elements: { image: {style: {'aspectRatio': '4x3'}}}
        },
      ]
    },
  }
}

