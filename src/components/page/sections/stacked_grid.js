import React from 'react';
import Group from '../groups';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

let num_clones = 6;

class StackedGrid extends React.PureComponent {
  render () {
    const { style, color, groups, variant, elements } = this.props;

    const containerClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);
    const itemClassNames = convertStyleToAtomic({
      display: "flex",
      justify: "center",
      flex: "wrap",
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      width: Math.floor(100 / (variant.columns)) + 'P',
      paddingHorizontal: style.gutter,
    });

    const tpClassNames = convertStyleToAtomic({
      textAlign: "center",
    });
    return (
      <div className={colorClassNames + ' StackedGrid'}>
        <div className={containerClassNames}>
          <div className={tpClassNames}>
            <Group {...groups.tp} />
          </div>
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

export default StackedGrid;

export const blueprint = {
  type: 'grid',
  inherits: ['BasicSection', 'GutterSection', 'BaseSection'],
  style: {},
  color: {},
  elements: {
    heading: {
      name: "BasicHeading",
    },
    subheading: {
      name: "BasicSubheading",
    },
  },
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading'],
    },
    gridItem: {
      options: [
        {name: 'HeadingParagraph' , clones: num_clones, elements:{heading:{name:'SmallHeading'}}},
        {name: 'HeadingParagraphLink', clones: num_clones,  elements:{heading:{name:'SmallHeading'}}},
        {name: 'IconHeadingParagraph',  clones: num_clones, elements:{heading:{name:'SmallHeading'}}},
        {name: 'ImageHeadingParagraph', clones: num_clones, 
          groups: { tp: { options: [
            {name: 'HeadingParagraph', elements: {heading: {name:'SmallHeading'}}}
          ]}},
          elements: { image: { _defaults: {style: {'aspectRatio': '4x3'}}}}
        },
      ]
    },
  },
  variants: [{
    columns: {
      _default:3,
      options: [2,3,4],
    }
  }]
}

