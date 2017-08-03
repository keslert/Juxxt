import React from 'react';
import Group from '../groups';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';

class Cards extends React.PureComponent {
  render () {
    const { style, color, groups } = this.props;

    const containerClassNames = convertStyleToAtomic({
      display: "flex",
      flex: "wrap",
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      width: Math.floor(100 / (style.columns)) + 'P',
      marginVertical: style.gutter, 
    });
    
    const cardColorClassNames = convertColorToAtomic(color);
    const cardClassNames = convertStyleToAtomic({
      ...style,
      height: '100P',
      marginHorizontal: style.gutter,
      border: color.borderColor === '#transparent' ? 'none' : 2,
    })
    

    return (
      <div className={containerClassNames}>
        {groups.card.clones.map((group, i) => (
          <div className={boxClassNames} key={i}>
            <div className={cardClassNames + ' ' + cardColorClassNames}>
              <Group {...group} className={"w-100P"}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Cards;


const card = {
  name: 'HeadingParagraph', 
  elements: { heading: { name:'SmallHeading' }},
  blueprint: { clones: { _default: 3, min: 1, max: 12 }},
}

export const blueprint = {
  type: 'basic',
  inherits: ['Guttered', 'Columned', 'Carded'],
  style: {},
  color: {
    background: 'white',
  },
  groups: {
    card: {
      _default: card,
      options: [
        card,
        {...card, name: 'HeadingParagraphLink'},
        {...card, name: 'IconHeadingParagraph'},
        {
          name: 'ImageHeadingParagraph', 
          blueprint: { clones: {_default: 3, min: 1, max: 12}},
          groups: { 
            tp: { 
              name: 'HeadingParagraph', 
              elements: {heading: {name:'SmallHeading'}}
            }
          },
          elements: { image: {style: {'aspectRatio': '4x3'}}}
        },
      ]
    },
  },
  background: {},
}

