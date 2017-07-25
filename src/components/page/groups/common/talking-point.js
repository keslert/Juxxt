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
      layout: {
        align='center',
      },
      groups: {
        buttonList,
      }
    } = this.props;

    const wrapClassNames = convertStyleToAtomic({
      ...style,
      textAlign: align,
      margin: 'auto', 
    });

    const boxClassNames = convertStyleToAtomic({
      marginVertical: style.buffer || 0,
      paddingBottom: '-1px',
    })

    return (
      <Box className={wrapClassNames}>
        <div className={boxClassNames}>
          {kicker && <Element {...kicker} />}
          {heading && <div><Element {...heading} /></div>}
          {subheading && <div><Element {...subheading} /></div>}
        </div>

        {paragraph && (
          <div className={boxClassNames}>
            <Element {...paragraph} />
          </div>
        )}

        {(links || buttonList) && (
          <div className={boxClassNames}>
            {links && <Element {...links}/>}
            {buttonList && <Group {...buttonList} />}
          </div>
        )}
        
      </Box>
    )
  }
}

export default TalkingPoint;