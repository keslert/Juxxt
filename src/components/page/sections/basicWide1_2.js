import React from 'react';
import Group from '../groups';
import Box from '../../common/box';
import Element from '../elements';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../core/generator/color/conversions';
import isNumber from 'lodash/isNumber';

class BasicWide1_2 extends React.Component {

  render() {

    const { groups, elements, style, color } = this.props;

    const mediaWrapClassNames = convertStyleToAtomic({width: '50P', order: 2, height: (style.height + "e")})

    const isTpLeft = style.order === 'left';
    const isConstrained = style.constrained === 'page';
    const tpWrapClassNames = convertStyleToAtomic({
      textAlign: isConstrained ? 'left' : 'center',
      width: '50P',
      order: isTpLeft ? 1 : 3,
      display: 'flex',
      align: 'center',
    })

    
    const tpClassNames = convertStyleToAtomic({
      maxWidth: isConstrained ? 'page-50P' : 'inherit',
      marginLeft: isTpLeft ? 'auto' : 'inherit',
      paddingLeft: !isTpLeft || !isConstrained ? style.gutter : isConstrained ? style.edgePadding : 0,
      paddingRight: isTpLeft || !isConstrained ? style.gutter : isConstrained ? style.edgePadding : 0,
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
  inherits: ['Guttered', 'Ordered', 'ConstrainedSection', 'Section'],
  color: {},
  background: {
    color: 'default',
    pattern: true,
    gradient: true,
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
  style: {
    height: {
      _default: 35,
      options: [35,40,45,50,55],
    },
  },
}