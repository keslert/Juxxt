import React from 'react';
import Group from '../groups';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import { range } from 'lodash';

class Grid extends React.PureComponent {
  render () {
    const { style, color, groups, variant, elements } = this.props;
    const boxStyle = {
      display: "flex",

      justify: "center",
      flex: "wrap",
      paddingHorizontal:5,

    }
    const divStyle = {
      ...style,
      width: Math.floor(100 / (variant.columns)) + 'P',
    }

    const headingStyle = {
      paddingTop: 5,
      textAlign: "center",
    }

    const styleClassNames = convertStyleToAtomic(boxStyle);
    const divClassNames = convertStyleToAtomic(divStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames + ' Grid'}>
      <div className={convertStyleToAtomic(headingStyle)}>
        <Element {...elements.heading} />
        <Element {...elements.subheading} />
      </div>
        <div className={styleClassNames}>
          {groups.tp.clones.map((group, i) => (
            <div className={divClassNames}key={i}>
              <Group {...group} className={"w-100P"}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Grid;

export const blueprint = {
  type: 'grid',
  inherits: ['GutterSection'],
  style: {
    padding: {
      _default: 3,
      options: range(0,4)
    }
  },
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
      options: [
        {name: 'HeadingParagraph' , clones: {_default:6}, overrides: {elements:{heading:{name:'SmallHeading'}}}},
        {name: 'HeadingSubheading', clones: {_default:6},  overrides: {elements:{heading:{name:'SmallHeading'}}}},
        {name: 'KickerHeadingParagraph', clones: {_default:6},  overrides: {elements:{heading:{name:'SmallHeading'}}}},
        {name: 'HeadingParagraphLink', clones: {_default:6},  overrides: {elements:{heading:{name:'SmallHeading'}}}},
        {name: 'IconHeadingParagraph', clones: {_default:6},  overrides: {elements:{heading:{name:'SmallHeading'}}}},
      ]
    }
  },
  variants: [{
    columns: {
      _default:3,
      options: range(2, 7),
    }
  }]
}

