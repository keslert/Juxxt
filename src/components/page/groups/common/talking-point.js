import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

class TalkingPoint extends React.Component {

  render() {
    const { 
      variation: { alignment },
      kicker,
      heading,
      subheading,
      paragraph,
      links,
    } = this.props;

    return (
      <Box alignment={alignment}>
        {kicker && <Element {...kicker} />}
        {this.renderHeading()}
        {this.renderSubheading()}
        {this.renderParagraph()}
        {this.renderLinks()}
      </Box>
    )
  }
}

export default TalkingPoint;