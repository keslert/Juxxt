import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicHeading, BasicParagraph } from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';


class HeadingParagraphButton extends React.Component {
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

export default HeadingParagraphButton;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
  color: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
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