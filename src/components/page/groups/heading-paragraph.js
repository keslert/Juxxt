import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph } from '../elements/_blueprints';

class HeadingParagraph extends React.Component {
  render() {
    const { elements, style, color, variants } = this.props;

    return (
      <TalkingPointComponent
        style={style}
        color={color}
        elements={elements}
        groups={{}}
        variants = {variants}
        />
    )
  }
}

export default HeadingParagraph;

export const blueprint = {
  inherits: ['RowBuffer'],
  style: {
    textAlign: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  },
  color: {},
  background: {
    color: true,
    border: true,
    borderRadius: true,
    shadow: true,
  },
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    paragraph: {
      name: BasicParagraph.name,
      // blueprint: {
      //   style: {
      //     marginBottom: {
      //       _default:0 ,
      //       hide: _=> true,
      //     }
      //   }
      // }
    },
  },
  variants: [{
    
  }]
}