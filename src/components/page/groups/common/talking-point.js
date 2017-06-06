import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

class TalkingPoint extends React.Component {

  render() {
    const { 
      variant,
      elements: {
        kicker,
        heading,
        subheading,
        paragraph,
        links,
      }
    } = this.props;

    const alignment = 'center';

    return (
      <Box alignment={alignment}>
        {kicker && <Element {...kicker} />}
        {heading && <div><Element {...heading} /></div>}
        {paragraph && <div><Element {...paragraph} /></div>}
      </Box>
    )
  }
}

export default TalkingPoint;