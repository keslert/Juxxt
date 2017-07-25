import React from 'react';
import Elements from '../../elements';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class FooterVerticalLists extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;

    const containerClassNames = convertStyleToAtomic({
      ...style,
    })
    
    const wrapClassNames = convertStyleToAtomic({
      display: "flex",
      marginHorizontal: -style.gutter,
    });

    const boxClassNames = convertStyleToAtomic({
      width: Math.floor(100 / (1 + groups.lists.clones.length)) + 'P',
      paddingHorizontal: style.gutter,
    })

    return (
      <div className={convertColorToAtomic(color) + ' FooterVerticalLists'}>
        <div className={containerClassNames}>
          <div className={wrapClassNames}>
            
            <div className={boxClassNames}>
              <Elements {...elements.logo} />
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
  inherits: ['BasicSection', 'GutterSection', 'BaseSection'],
  style: {},
  color: {},
  elements: {
    logo: {
      name: 'LogoImage',
    },
  },
  groups: {
  	lists: {
  		options:[
        {name: 'VerticalList', clones: 3},
      ],
  	},
  },
  layouts: {},
}