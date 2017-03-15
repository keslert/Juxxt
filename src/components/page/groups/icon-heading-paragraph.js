import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';
import { _Flex, _DisplayFlex, _Block } from '../../common/styled-base';
import { getFontSize } from '../elements/heading';



const IconHeadingParagraph = ({
  elements,
  variation,
  props,
}) => {


  let headingProps;
  if(variation.alignment === 'left') {
    headingProps = {
      flex: 1,
      justify: 'flex-start',
      order: 3,
      flexDirection: 'column',
    }
  } else {
    headingProps = {
      flex: 1,
      justify: 'flex-end',
      order: 1,
      flexDirection: 'column',
    }
  }
  
  // TODO: Use alignment for ordering.
  if(variation.iconPosition === 'inline') {
    return (
      <_Block {...props}>
        <_DisplayFlex>
          <_DisplayFlex order={2}>
            <Element {...elements.icon} />
          </_DisplayFlex>
          <_DisplayFlex {...headingProps}>
            <Element {...elements.heading} />
          </_DisplayFlex>
        </_DisplayFlex>
        <Element {...elements.paragraph} />
      </_Block>
    )
  }

  // TODO: Use alignment for ordering.
  if(variation.iconPosition === 'column') {
    return (
      <_Block {...props}>
        <_DisplayFlex>
          <_DisplayFlex order={2}>
            <Element {...elements.icon} />
          </_DisplayFlex>
          <_DisplayFlex {...headingProps}>
            <Element {...elements.heading} />
            <Element {...elements.paragraph} />
          </_DisplayFlex>
        </_DisplayFlex>
      </_Block>
    )
  }

  return (
    <_Block {...props}>
      <div>
        <Element {...elements.icon} />
      </div>
      <div>
        <Element {...elements.heading} />
      </div>
      <div>
        <Element {...elements.paragraph} />
      </div>
    </_Block>
  )
}
export default IconHeadingParagraph;

export const requirements = {
  variations: [
    {
      iconPosition: ['top'],
      alignment: ['left', 'center', 'right'],
    },
    {
      iconPosition: ['inline', 'column'],
      alignment: ['left', 'right'],
    }
  ],
  elements: {
    icon: {
      element: 'Icon',
      overrides: ({variation, elements, globals}) => {
        const { iconPosition, alignment } = variation;
        if(iconPosition === 'top') {
          return {
            margin: '0 0 15px 0',
          }
        } else if(iconPosition === 'inline') {
          return {
            margin: alignment === 'left' ? '0 10px 0 0' : '0 0 0 10px',
            fontSize: getFontSize(elements.heading, globals),
          }
        }
        return {
          margin: alignment === 'left' ? '0 25px 0 0' : '0 0 0 25px',
          fontSize: getFontSize(elements.heading, globals),
        }
      }
    },
    heading: {
      element: 'Heading',
    },
    paragraph: {
      element: 'Paragraph',
    }
  }
}

export const defaultProps = ({variation}) => ({
  maxWidth: 600,
  textAlign: variation.alignment,
})

export const modifiableProps = {
  textAlign: true,
  padding: true,
  margin: true,
};
