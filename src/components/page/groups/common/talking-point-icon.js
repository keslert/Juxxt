import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPointIcon extends React.Component {

  renderColumn(_style, icon, heading, paragraph, align) {
    let order = 0;
    let padding = "pr3";
    if(align === "tr")
      order=1;
      padding = "pl3";
    
    return (
      <Box className={ "flex flex-row " + convertStyleToAtomic(_style) + " " + align}>
        <div className={"flex order-" + order}>
          {icon && <div className={"fs3 " + padding}><Element {...icon} /> </div>}
        </div>
        <div className="flex pt1 flex-column">
          {heading && <div><Element {...heading} /></div>}
          {paragraph && <div><Element {...paragraph}/></div>}
        </div>
      </Box>
    )
  }

  renderInline(_style, icon, heading, paragraph, align) {
    return (
      <Box className={ "flex flex-column " + convertStyleToAtomic(_style)+ " " + align}>
        <div className="flex flex-row">
          {icon && <div className="pr3"><Element {...icon} /> </div>}
          {heading && <div><Element {...heading} /></div>}
        </div>
        <div className="flex pt1">
          {paragraph && <div><Element {...paragraph}/></div>}
        </div>
      </Box>
    )
  }

  render() {
    const { 
      style,
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
    if (variant.iconPosition === "column") {
       return this.renderColumn(style, icon, heading, paragraph, variant.textAlign);
    } else if (variant.iconPosition === "inline") {
       return this.renderInline(style, icon, heading, paragraph, variant.textAlign);
    }

      return (
        <Box className={convertStyleToAtomic(_style) + " " + variant.textAlign}>
          {icon && <div><Element {...icon} /> </div>}
          {heading && <div><Element {...heading} /></div>}
          {paragraph && <div><Element {...paragraph} /></div>}
        </Box>
      )
  }
}

export default TalkingPointIcon;