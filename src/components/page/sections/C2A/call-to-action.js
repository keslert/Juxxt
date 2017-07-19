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
      align: 'center',
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
  inherits: ['BasicSection', 'BaseSection'],
  type: 'action',
  style: {},
  color: {},
  groups: {
    tp: {
      options: [
        {name: 'HeadingSubheading', variants: [{align: {options:['inherit']}}]},
       ]
        /*'HeadingParagraph','KickerHeadingParagraph',*],*/
    },
    interaction: {
      options:[
        'NameEmailForm',
        'EmailForm',
        'NameEmailMessageForm',
        {name: 'ButtonList', elements: { buttons: {name: 'BasicButton', clones: 1}}},
      ],
    },
  },
  variants: [{
    orientation: {
      options: ['stacked', 'flat'],
    },
  }],
}
