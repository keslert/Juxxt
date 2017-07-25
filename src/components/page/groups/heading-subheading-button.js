import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicSubheading, BasicHeading } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';


class HeadingSubheadingButton extends React.Component {
  render() {
    const { elements, groups, layout, style, color } = this.props;
    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={groups}
        layout={layout} />
    )
  }
}

export default HeadingSubheadingButton;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
  color: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    subheading: {
      name: BasicSubheading.name,
    },
  },
  groups: {
    buttonList: {
      options: ['ButtonList'],
    }
  },
  layouts: {
    align: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  },
}