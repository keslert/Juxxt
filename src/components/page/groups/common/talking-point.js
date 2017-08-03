import React from 'react';
import Element from '../../elements';
import Group from '../../groups';
import Box from '../../../common/box';

import { convertColorToAtomic } from '../../../../core/generator/color/conversions';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';

class TalkingPoint extends React.Component {

  render() {

    const { 
      style,
      color,
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

    const wrapClassNames = convertStyleToAtomic({
      ...style,
      margin: 'auto', 
    });

    const boxClassNames = convertStyleToAtomic({
      marginBottom: style.buffer || 0,
    })

    const paragraphClassNames = convertStyleToAtomic({
      marginBottom: ((links || buttonList) && style.buffer) || 0,
    })

    const colorClassNames = convertColorToAtomic(color);
    return (
      <Box className={colorClassNames + ' ' + wrapClassNames}>
        <div className={boxClassNames}>
          {kicker && <Element {...kicker} />}
          {heading && <div><Element {...heading} /></div>}
          {subheading && <div><Element {...subheading} /></div>}
        </div>

        {paragraph && (
          <div className={paragraphClassNames}>
            <Element {...paragraph} />
          </div>
        )}

        <div>
          {links && <Element {...links}/>}
          {buttonList && <Group {...buttonList} />}
        </div>
        
      </Box>
    )
  }
}

export default TalkingPoint;