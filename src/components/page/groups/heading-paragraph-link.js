import React from 'react';
import TalkingPointComponent from './common/talking-point';
import { BasicHeading, BasicParagraph, BasicLink} from '../elements/_blueprints';
import { TalkingPoint } from './_inherits';

class HeadingParagraphLink extends React.PureComponent {
	render() {
		return(
			<TalkingPointComponent
				style={this.props.style}
				color={this.props.color}
        elements={this.props.elements}
        groups={{}}
				variant={this.props.variant}
			/>
		)
	}
}

export default HeadingParagraphLink;

export const blueprint = {
  inherits: [TalkingPoint, 'RowBuffer'],
  style: {},
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
  }],
}