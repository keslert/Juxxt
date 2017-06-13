import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPoint extends React.Component {

  render() {
    const { 
      style,
      align,
      elements: {
        kicker,
        heading,
        subheading,
        paragraph,
        links,
      }
    } = this.props;

    const _style = {
      ...style,
      textAlign: align,
    }

    return (
      <Box className={convertStyleToAtomic(_style)}>
        {kicker && <Element {...kicker} />}
        {heading && <div><Element {...heading} /></div>}
        {subheading && <div><Element {...subheading} /></div>}
        {paragraph && <div><Element {...paragraph} /></div>}
        {links && <div><Element {...links}/></div>}
      </Box>
    )
  }
}

export default TalkingPoint;