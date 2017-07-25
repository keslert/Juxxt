import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class Grid extends React.PureComponent {
  render () {
    const { style, color, groups, layout } = this.props;

    const containerClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);
    const itemClassNames = convertStyleToAtomic({
      display: "flex",
      flex: "wrap",
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      width: Math.floor(100 / (layout.columns)) + 'P',
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
  inherits: ['BasicSection', 'GutterSection', 'BaseSection'],
  style: {},
  color: {},
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
  },
  layouts: {
    columns: {
      _default: 3,
      options: [2,3,4,5,6],
    }
  }
}

