import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicKicker, BasicParagraph, BasicButton, BasicSubheading, BasicHeading } from '../elements/_blueprints';

class KickerHeadingParagraphButton extends React.Component {
  render() {
    const { elements, groups, style, color } = this.props;

    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={groups}
        />
    )
  }
}
export default KickerHeadingParagraphButton;

export const blueprint = {
  inherits: ['RowBuffer', 'BaseGroup'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
  color: {},
  elements:  {
    kicker: {
      name: BasicKicker.name,
    },
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
}