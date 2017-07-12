import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';


class CallToAction extends React.PureComponent {
  render () {
    const { groups, style, color, variant } = this.props;

    const containerStyle = {
      ...style
    }
    const tpBox = {
      ...style,
      ...color,
      //paddingHorizontal: style.gutter,
      display: "flex",
      width: '50P',
      align: "center",
      justify: "center",
      flexWrap: "flex",
      //order: variant.order,
    }
    const interactionBox = {
      ...style,
      ...color,
      //paddingHorizontal: style.gutter,
      display: "flex",
      width: '50P',
      align: "center",
      justify: "center",
      flexWrap: "flex",
      //maxWidth: "50P",
      //order: variant.order,
    }

    const tpStyleClassNames = convertStyleToAtomic(tpBox);
    const interactionStyleClassNames = convertStyleToAtomic(interactionBox);
    const bothColorClassNames = convertColorToAtomic(interactionBox);//same as tpBox

    return (
      <div className={bothColorClassNames + ' call_action flex-row' }>
        <div className={tpStyleClassNames}>
          <Group {...groups.tp} />
        </div>
        <div>
            <div className={interactionStyleClassNames}>
              <Group {...groups.interaction} />
            </div>
        </div>
        
      </div>
    )
  }
}

export default CallToAction;

export const blueprint = {
  type: 'action',
  inherits: ['BasicSection'],
/*  type: 'basic',*/
  style: {},
  color: {},
  groups: {
    tp: {
      options: 
      ['HeadingSubheading','HeadingParagraph','KickerHeadingParagraph','Heading'],
    },
    interaction: {
      options:['InputButton','InputInputButton','SingleButton', 'DoubleButton', 'StackedButtons'],
      //, 'StackedButtons'
    },
  },
  variants: [{
    //maybe buttons and input being left-right v. up-down??
  }],
}