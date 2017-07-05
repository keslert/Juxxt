import React from 'react';
import Element from '../../elements';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPoint extends React.Component {

  render() {
     const boxStyle = {
      ...style,
      display: "flex",
      align: "start",
      justify: "center",
      height: 60,
    }
    const { 
      style,
      align,
      elements: {
        kicker,
        heading,
        subheading,
        paragraph,
        links,
        button,
        secondaryButton,
        
      }
    } = this.props;

    const _style = {
      ...style,
      textAlign: align,
    }


    const styleClassNames = convertStyleToAtomic(boxStyle);
 


    return (
      <Box className={convertStyleToAtomic(_style)}>
        {kicker && <Element {...kicker} />}
        {heading && <div><Element {...heading} /></div>}
        {subheading && <div><Element {...subheading} /></div>}
        {paragraph && <div><Element {...paragraph} /></div>}
        {links && <div><Element {...links}/></div>}
        <div className={ styleClassNames + 'dib justify-center'}>
          {button && <div className = {'mh3 '}><Element {...button}/></div>}
          {secondaryButton && <div className = 'mh3'><Element {...secondaryButton}/></div>}
        </div>
      </Box>
    )
  }
}

export default TalkingPoint;