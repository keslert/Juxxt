import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Link extends React.PureComponent {
 
  render() {
    let { style, color, content } = this.props;
    //debugger;
    if(this.props.group.name === "Button1" || this.props.group.name === "Button2") {
      style = {...style, marginLeft: 2, marginRight: 2 ,marginTop: 3, marginBottom:3}
    }
    const styleClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);

    return(
      <a className={styleClassNames + ' dib ' + colorClassNames}>
        {content.text}
      </a>
    )
  }
}
export default Link;
