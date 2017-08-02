import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';
import Group from '../../groups';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPointIcon extends React.Component {

  renderColumn() {
   const { 
      style,
      elements: {
        heading,
        subheading,
        paragraph,
        icon,
      },
      groups: {
        buttonList,
      }
    } = this.props;

    const order = style.textAlign === 'right' ? 3 : 1;
    
    return (
      <Box className={ "flex flex-row " + convertStyleToAtomic(style)}>
        <div className={"flex order-" + order}>
          <Element {...icon} />
        </div>
        <div className="flex flex-column order-2">
          {heading && <div><Element {...heading} /></div>}
          {paragraph && <div><Element {...paragraph}/></div>}
          {subheading && <div><Element {...subheading}/></div>}
          {buttonList && <Group {...buttonList} />}
        </div>
      </Box>
    )
  }

  renderInline() {
    const { 
      style,
      elements: { icon, heading, subheading, paragraph }, 
      groups: {
        buttonList,
      }
    } = this.props;

    const order = style.textAlign === 'right' ? 3 : 1;

    return (
      <Box className={ "flex flex-column " + convertStyleToAtomic(style)}>
        <div className="flex flex-row">
          <Element {...icon} />
          {heading && <Element {...heading} />}
        </div>
        <div className="flex">
          {subheading && <div><Element {...subheading}/></div>}
          {paragraph && <div><Element {...paragraph}/></div>}
          {buttonList && <Group {...buttonList} />}
        </div>
      </Box>
    )
  }

  renderAbove() {
    const { 
      style,
      elements: { icon, heading, subheading, paragraph },
      groups: {
        buttonList,
      }
    } = this.props;

    return (
      <Box className={convertStyleToAtomic(style)}>
        <div><Element {...icon} /></div>
        {heading && <div><Element {...heading} /></div>}
        {subheading && <div><Element {...subheading}/></div>}
        {paragraph && <div><Element {...paragraph} /></div>}
        {buttonList && <Group {...buttonList} />}
      </Box>
      
    )
  }

  render() {
    const { style } = this.props;

    if (style.iconPosition === "column") {
       return this.renderColumn();
    } else if (style.iconPosition === "inline") {
       return this.renderInline();
    }
    return this.renderAbove();
  }
}

export default TalkingPointIcon;