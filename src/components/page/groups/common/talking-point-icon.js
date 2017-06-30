import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPointIcon extends React.Component {

  renderColumn() {

  }

  renderAbove() {
  }

  renderInline() {
  }

  render() {
    const { 
      style,
      align,
      variant,
      elements: {
        kicker,
        icon,
        heading,
        subheading,
        paragraph,
        links,
        button,
      }
    } = this.props;

    const _style = {
      ...style,
      // textAlign: align,
    }

    // if(variant.iconPosition === "inline") {
    //   return this.renderInline();
    // } else if (variant.iconPosition === "above") {
    //   return this.renderAbove();
    // } else if (variant.iconPosition === "column") {
    //   return this.renderColumn();
    // }
      return (
        <Box className={convertStyleToAtomic(_style)}>
          {icon && <div><Element {...icon} /> </div>}
          {heading && <div><Element {...heading} /></div>}
          {paragraph && <div><Element {...paragraph} /></div>}
        </Box>
      )
  }
}

export default TalkingPointIcon;