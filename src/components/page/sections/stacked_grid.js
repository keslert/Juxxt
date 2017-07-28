import React from 'react';
import Group from '../groups';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

let num_clones = 6;

class StackedGrid extends React.PureComponent {
  render () {
    const { style, color, groups, elements } = this.props;

    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
    });

    const colorClassNames = convertColorToAtomic(color);
    const itemClassNames = convertStyleToAtomic({
      display: "flex",
      justify: "center",
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
  type: 'grid',
  inherits: ['Columned', 'ConstrainedSection', 'Section'],
  style: {},
  color: {
    background: 'default',
    pattern: true,
    gradient: true,
  },
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
  },
}

