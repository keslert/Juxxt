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
          <Group {...groups.item} />
        </div>
      </div>
    )
  }
}

export default CallToAction;

export const blueprint = {
  type: 'action', //change this back to call-to-action
  inherits: ['BasicSection'],
  style: {},
  color: {},
  groups: {
    item: {
      options: ['HeadingSubheadingButton','HeadingParagraphButton','HeadingParagraph2Buttons','HeadingSubheading2Buttons'],
    },
  },
  variants: []
}
