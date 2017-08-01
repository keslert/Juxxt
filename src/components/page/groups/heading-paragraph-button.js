import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicButton, BasicHeading, BasicParagraph } from '../elements/_blueprints';

class HeadingParagraphButton extends React.Component {
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

export default HeadingParagraphButton;

export const blueprint = {
  inherits: ['RowBuffer'],
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },

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
}