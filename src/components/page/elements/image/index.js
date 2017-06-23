import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class Image extends React.PureComponent {

  render() {
    let { content, style } = this.props;
    if(this.props.group.name === "Logo") {
      style = {...style, height: 50, paddingLeft: 4, width:50};
    }
    const classNames = convertStyleToAtomic(style);

    if(style.aspectRatio !== 'auto') {
      return <div className={classNames + ' bg-center cover w-100P'}
                  style={{backgroundImage: `url(${content.src})`}} />
    }

    return (
      <img src={content.src} className={classNames} alt="" />
    )
  }
}
export default Image;