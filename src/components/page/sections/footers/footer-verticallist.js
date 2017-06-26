import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class FooterVerticalList extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;
    const boxStyle = {
      ...style,
      display: "flex",
      align: "start",
      justify: "center",
      height: 60,
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);
    return (
      <div className={ colorClassNames + ' pl6 pr6 pt6 pb6 FooterVerticalList'}>
        <div className={styleClassNames}>   
        	<Group {...groups.logo} />
            <Group {...groups.verticallist} />
            <Group {...groups.verticallist} />
            <Group {...groups.verticallist} />
        </div>
      </div>
    )
  }
}

export default FooterVerticalList;

export const blueprint = {
  inherits: [],
  style: {},
  color: {},
  groups: {
  	verticallist: {
  		options:['VerticalList'],
  	},
    logo: {
      options: ['Logo']
    },
    
  },
  variants: []
}