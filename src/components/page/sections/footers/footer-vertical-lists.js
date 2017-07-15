import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class FooterVerticalLists extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const containerClassNames = convertStyleToAtomic({
      ...style,
    })
    
    const wrapClassNames = convertStyleToAtomic({
      display: "flex",
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      width: Math.floor(100 / (1 + groups.lists.clones.length)) + 'P',
      marginHorizontal: style.gutter,
    })

    return (
      <div className={convertColorToAtomic(color) + ' FooterVerticalLists'}>
        <div className={containerClassNames}>
          <div className={wrapClassNames}>
            
            <div className={boxClassNames}>
              <Group {...groups.logo} />
            </div>
            
            {groups.lists.clones.map((list, i) => (
              <div className={boxClassNames} key={i}>
                <Group {...list} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default FooterVerticalLists;

export const blueprint = {
  type: 'footer',
  inherits: ['BasicSection', 'GutterSection'],
  style: {},
  color: {},
  groups: {
  	lists: {
  		options:[
        {name: 'VerticalList', clones: { _default: 3 }},
      ],
  	},
    logo: {
      options: ['Logo']
    },
    
  },
  variants: []
}