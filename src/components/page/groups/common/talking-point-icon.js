import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPointIcon extends React.Component {

  renderColumn() {
    const { 
      style,
      layout,
      elements: { icon, heading, paragraph } 
    } = this.props;

    const order = layout.align === 'right' ? 3 : 1;
    const _style = { ...style, textAlign: layout.align }
    
    return (
      <Box className={ "flex flex-row " + convertStyleToAtomic(_style)}>
        <div className={"flex order-" + order}>
          <Element {...icon} />
        </div>
        <div className="flex flex-column order-2">
          {heading && <div><Element {...heading} /></div>}
          {paragraph && <div><Element {...paragraph}/></div>}
        </div>
      </Box>
    )
  }

  renderInline() {
    const { 
      style,
      layout,
      elements: { icon, heading, paragraph } 
    } = this.props;

    const order = layout.align === 'right' ? 3 : 1;
    const _style = { ...style, textAlign: layout.align }

    return (
      <Box className={ "flex flex-column " + convertStyleToAtomic(_style)}>
        <div className="flex flex-row">
          <Element {...icon} />
          {heading && <Element {...heading} />}
        </div>
        <div className="flex">
          {paragraph && <div><Element {...paragraph}/></div>}
        </div>
      </Box>
    )
  }

  renderAbove() {
    const { 
      style,
      layout,
      elements: { icon, heading, paragraph } 
    } = this.props;

    const _style = { ...style, textAlign: layout.align }

    return (
      <Box className={convertStyleToAtomic(_style)}>
        <div><Element {...icon} /></div>
        {heading && <div><Element {...heading} /></div>}
        {paragraph && <div><Element {...paragraph} /></div>}
      </Box>
    )
  }

  render() {
    const { layout } = this.props;

    if (layout.iconPosition === "column") {
       return this.renderColumn();
    } else if (layout.iconPosition === "inline") {
       return this.renderInline();
    }
    return this.renderAbove();
  }
}

export default TalkingPointIcon;