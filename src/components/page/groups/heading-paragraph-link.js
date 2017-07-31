import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph, BasicLink} from '../elements/_blueprints';

class HeadingParagraphLink extends React.PureComponent {
	render() {
		return(
			<TalkingPointComponent
				style={this.props.style}
				color={this.props.color}
        elements={this.props.elements}
        groups={{}}
			  />
		)
	}
}

export default HeadingParagraphLink;

export const blueprint = {
  inherits: ['RowBuffer'],
  style: {
    textAlign: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  },
  color: {},
  elements: {
    heading: {
      name: BasicHeading.name,
    },
    links: {
      name: BasicLink.name,
    },
    paragraph: {
      name: BasicParagraph.name,
    }
  },
  variants: [{
    align: {
      _default: 'center',
      options: ['left', 'center', 'right'],
    }
  }]
}