import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import Box from '../../../common/box';

import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPoint extends React.Component {

  render() {

    const { 
      style,
      elements: {
        kicker,
        heading,
        subheading,
        paragraph,
        links,
      },
      variant: {
        align='center',
      },
      groups: {
        buttonList,
      }
    } = this.props;

    const classNames = convertStyleToAtomic({
      ...style,
      textAlign: align,
    });

    const boxClassNames = convertStyleToAtomic({
      marginVertical: style.buffer || 0,
      paddingBottom: '-1px',
    })

    return (
      <Box className={classNames}>
        <div className={boxClassNames}>
          {kicker && <Element {...kicker} />}
          {heading && <div><Element {...heading} /></div>}
          {subheading && <div><Element {...subheading} /></div>}
        </div>
        <div className={boxClassNames}>
          {paragraph && <div><Element {...paragraph} /></div>}
        </div>
        <div className={boxClassNames}>
          {links && <div><Element {...links}/></div>}
          {buttonList && <div><Group {...buttonList} /></div>}
        </div>
      </Box>
    )
  }
}

export default TalkingPoint;