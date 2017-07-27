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


const clones = { _default: 3, min: 1, max: 12 };
export const blueprint = {
  type: 'basic',
  inherits: ['Guttered', 'Columned', 'Section'],
  style: {
    height: { _default: 2, options: [0,1,2,3,4,5,6,7,8] }
  },
  background: {
    color: 'default',
    pattern: true,
    gradient: true,
  },
  groups: {
    gridItem: {
      _default: {name: 'HeadingParagraph', clones, elements:{heading:{name:'SmallHeading'}}},
      options: [
        {name: 'HeadingParagraph', clones, elements:{heading:{name:'SmallHeading'}}},
        {name: 'HeadingParagraphLink', clones, elements:{heading:{name:'SmallHeading'}}},
        {name: 'IconHeadingParagraph', clones, elements:{heading:{name:'SmallHeading'}}},
        {name: 'ImageHeadingParagraph', 
          groups: { tp: { options: [
            {name: 'HeadingParagraph', clones, elements: {heading: {name:'SmallHeading'}}}
          ]}},
          elements: { image: { _defaults: {style: {'aspectRatio': '4x3'}}}}
        },
      ]
    },
  }
}

