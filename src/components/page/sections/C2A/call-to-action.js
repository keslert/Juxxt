import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';


class CallToAction extends React.PureComponent {
  render () {
    const { groups, style, color, variant } = this.props;

    const isFlat = variant.orientation === 'flat'; 
    const containerStyle = {
      ...style, 
      direction: isFlat ? 'row' : 'column',
      display: 'flex',
    }
    const tpStyle = {
      textAlign: isFlat ? 'left' : 'center',
      flex: 'auto',
    }
    const actionStyle = {
      textAlign: isFlat ? 'right' : 'center',
      flex: 'auto',
    }

    return (
      <div className={convertColorToAtomic(color)}>
        <div className={convertStyleToAtomic(containerStyle)}>

          <div className={convertStyleToAtomic(tpStyle)}> 
            <Group {...groups.tp} />
          </div>
          <div className={convertStyleToAtomic(actionStyle)}>
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
  type: 'action',
  style: {},
  color: {},
  groups: {
    tp: {
      options: [
        {name: 'HeadingSubheading', overrides: {variants: [{align: {options:['inherit']}}]}}
      ]
        /*'HeadingParagraph','KickerHeadingParagraph',*],*/
    },
    interaction: {
      options:[/*'InputButton','InputInputButton',*/'SingleButton'/*,'DoubleButton', 'StackedButtons'*/],
    },
  },
  variants: [{
    orientation: {
      options: ['stacked', 'flat'],
    },
  }],
}
