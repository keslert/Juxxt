import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPoint extends React.Component {

  render() {
     const boxStyle = {
      ...style,
      display: "dib",
      align: "start",
      justify: "center",
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
      },
      groups: {
        buttonList,
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
        <div className={ styleClassNames }>
          {button && <div><Element {...button}/></div>}
          {secondaryButton && <div className="ml3"><Element {...secondaryButton}/></div>}
        </div>

        {buttonList && <div><Group {...buttonList} /></div>}
      </Box>
    )
  }
}

export default TalkingPoint;