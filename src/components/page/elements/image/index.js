import React from 'react';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class Image extends React.PureComponent {

  render() {
    const { content, style } = this.props;

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