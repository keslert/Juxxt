import React from 'react';
import Elements from '../../elements';
import Group from '../../groups';
import Container from '../container';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class FooterVerticalLists extends React.PureComponent {
  render () {
    const { elements, groups, style, color } = this.props;

    const containerClassNames = convertStyleToAtomic({
      ...style,
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
      paddingHorizontal: style.edgePadding,
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
      <Container style={style} color={color}>
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
      </Container>
    )
  }
}

export default FooterVerticalLists;

export const blueprint = {
  type: 'footer',
  inherits: ['ConstrainedSection', 'Section'],
  style: {},
  color: { background: 'vibrant' },
  elements: {
    logo: {
      name: 'LogoImage',
    },
  },
  groups: {
  	lists: {
  		options:[
        {
          name: 'VerticalList', 
          blueprint: {
            clones: { _default: 3, min: 1, max: 4 }
          }
        },
      ],
  	},
  },
  component: { footer: ['footer'] },
  background: {
    pattern: ['pattern'],
    gradient: ['gradient'],
    image: ['image'],
  }
}