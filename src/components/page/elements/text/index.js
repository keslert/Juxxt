import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';

class Text extends React.PureComponent {

  render() {

    const { style, color, content } = this.props;
  
    const styleClassNames = convertStyleToAtomic(style);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={styleClassNames + ' ' + colorClassNames}>
        {content.text}
      </div>
    );
  }
}
export default Text;
