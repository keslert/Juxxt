import React from 'react';
import Group from '../../groups';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';


class CallToAction extends React.PureComponent {
  render () {
    const { groups, style, color } = this.props;

    const boxStyle = {
      ...style,
      display: "flex",
      align: "center",
      justify: "center",
    }
    const styleClassNames = convertStyleToAtomic(boxStyle);
    const colorClassNames = convertColorToAtomic(color);

    return (
      <div className={colorClassNames + ' call_action'}>
        <div className={styleClassNames}>
          <Group {...groups.tp} />
          <div>
            <Group {...groups.input} />
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
      ['HeadingSubheadingButton','HeadingParagraphButton'/*,
      'HeadingParagraph2Buttons','HeadingSubheading2Buttons'*/],
    },
    input: {
      options:['InputButton','InputInputButton'],
    },
  },
  variants: [{
    //maybe buttons and input being left-right v. up-down??
  }],
}