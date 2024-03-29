import React from 'react';
import Element from '../elements';
import TalkingPointComponent from './common/talking-point'
import Group from './index';

class ImageHeadingParagraph extends React.Component {
  render() {
    const { elements, style, color, groups } = this.props;
    return (
      <div>
        <Element {...elements.image} />
        <Group {...groups.tp} />
      </div>
    )
  }
}
export default ImageHeadingParagraph;

export const blueprint = {
  inherits: ['BaseGroup'],
  style: {},
  color: {},
  elements: {
    image: { name: 'BasicImage' },
  },
  groups: {
    tp: {
      options: ['HeadingParagraph'],
    }
  },
}