import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
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
      },
      groups: {
        buttonList,
      }
    } = this.props;

    const classNames = convertStyleToAtomic({
      ...style,
      textAlign: align,
    });
 


    return (
      <Box className={classNames}>
        {kicker && <Element {...kicker} />}
        {heading && <div><Element {...heading} /></div>}
        {subheading && <div><Element {...subheading} /></div>}
        {paragraph && <div><Element {...paragraph} /></div>}
        {links && <div><Element {...links}/></div>}
        
        {buttonList && <div><Group {...buttonList} /></div>}
      </Box>
    )
  }
}

export default TalkingPoint;