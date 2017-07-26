import React from 'react';
import Element from '../elements';
import Group from '../groups';
import Box from '../../common/box';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import isNumber from 'lodash/isNumber';

class BasicWide1_2 extends React.Component {

  render() {

    const { groups, elements, layout, color } = this.props;

    const mediaWrapClassNames = convertStyleToAtomic({width: '50P', order: 2, height: (layout.height + "e")})

    const isTpLeft = layout.order === 'left';

    const tpWrapClassNames = convertStyleToAtomic({
      textAlign: layout.constrained ? 'left' : 'center',
      width: '50P',
      order: isTpLeft ? 1 : 3,
      display: 'flex',
      align: 'center',
    })

    
    const tpClassNames = convertStyleToAtomic({
      maxWidth: layout.constrained ? 'page-50P' : 'inherit',
      marginLeft: isTpLeft ? 'auto' : 'inherit',
      paddingLeft: !isTpLeft || !layout.constrained ? layout.gutter : 0,
      paddingRight: isTpLeft || !layout.constrained ? layout.gutter : 0,
    })

    const wrapClassNames = convertStyleToAtomic({
      display: "flex",
      flexWrap: "wrap",
      
    });
    const innerWrapClassNames= convertStyleToAtomic({

    })
    const colorClassNames = convertColorToAtomic(color);

    return (
      <Box className={colorClassNames}>
        <Box className={wrapClassNames}>
          <Box className={mediaWrapClassNames}>

            <Element {...elements.image} />
          </Box>
          <Box className={tpWrapClassNames}>
            <Box className={tpClassNames}>
              <Group {...groups.tp} />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}
export default BasicWide1_2;

export const blueprint = {
  type: 'basic',
  inherits: ['GutterSection', 'BaseSection'],
  color: {},
  layouts: {
    order: {
      options: ['left', 'right'],
    },
    constrained: {
      _default: true,
      options: [true, false],
    },
    height: {
      _default: 35,
      options: [35,40,45,50,55],
    },

    gutter: {
      _default: 4,
      options: [0,1,2,3,4,5],
    }
  },
  groups: {
    tp: {
      options: ['HeadingParagraph', 'HeadingSubheading','KickerHeadingParagraph','HeadingParagraphLink','HeadingSubheadingButton','HeadingParagraphButton', 'IconHeadingParagraph'],
    },
  },
  elements: {
    image: {
      name: 'CoverImage',
    },
  },
  style: {},
}