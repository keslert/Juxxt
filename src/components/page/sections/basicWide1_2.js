import React from 'react';
import Group from '../groups';
import Element from '../elements';
import Container from './container';
import { convertStyleToAtomic } from '../../../core/generator/style/conversions';

class BasicWide1_2 extends React.Component {

  render() {

    const { groups, elements, style, color } = this.props;

    const mediaWrapClassNames = convertStyleToAtomic({
      width: '50P', 
      order: 2, 
    })

    const isTpLeft = style.order === 'left';
    const isConstrained = style.constrained === 'page';
    const tpWrapClassNames = convertStyleToAtomic({
      textAlign: isConstrained ? 'left' : 'center',
      width: '50P',
      order: isTpLeft ? 1 : 3,
      display: 'flex',
      align: 'center',
      paddingBottom: '-l-' + (style.height / 2),
      paddingTop: '-l-' + (style.height / 2),
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
    
    return (
      <Container style={style} color={color} noBackgroundImage>
        <div className={wrapClassNames}>
          <div className={mediaWrapClassNames}>
            <Element {...elements.image} />
          </div>
          <div className={tpWrapClassNames}>
            <div className={tpClassNames}>
              <Group {...groups.tp} />
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
export default BasicWide1_2;

export const blueprint = {
  type: 'basic',
  inherits: ['Guttered', 'Ordered', 'ConstrainedSection', 'Section'],
  color: {
    background: 'default',
  },
  style: {},
  groups: {
    tp: {
      options: ['HeadingButton','KickerHeadingButton', 'KickerHeadingSubheadingButton','HeadingSubheadingButton','IconHeadingButton','IconHeadingParagraphButton', 'HeadingParagraphButton','KickerHeadingParagraphButton','Heading','HeadingParagraph','HeadingSubheading', 'KickerHeading', 'KickerHeadingParagraph','KickerHeadingSubheading', 'IconHeadingParagraph','IconHeadingSubheading'],
    },
  },
  elements: {
    image: {
      name: 'CoverImage',
    },
  },
  background: { 
    color: ['color'],
    pattern: ['pattern'],
    gradient: ['gradient'],
  },
  component: { 
    basic: ['basic'], 
    header: ['header'], 
    action: ['action'],
    grid: ['grid'],
    gallery: ['gallery'],
  },
}