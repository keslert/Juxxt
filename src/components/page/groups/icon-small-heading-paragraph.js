import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';
import { _Flex, _DisplayFlex, _Block } from '../../common/styled-base';
import { getFontSize } from '../elements/small-heading';

const IconSmallHeadingParagraph = ({
  elements,
  variation,
  props,
}) => {

  if(variation.iconPosition === 'heading') {
    return (
      <_Block {...props} textAlign="left">
        <_DisplayFlex>
          <Element {...elements.icon} />
          <_Flex>
            <Element {...elements.heading} />
          </_Flex>
        </_DisplayFlex>
        <Element {...elements.paragraph} />
      </_Block>
    )
  }

  if(variation.iconPosition === 'column') {
    return (
      <_Block {...props} textAlign="left">
        <_DisplayFlex>
          <Element {...elements.icon} />
          <_Flex>
            <div><Element {...elements.heading} /></div>
            <div><Element {...elements.paragraph} /></div>
          </_Flex>
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
export default IconSmallHeadingParagraph;


export const requirements = {
  variations: [
    {
      iconPosition: ['top'],
      alignment: ['left', 'center', 'right'],
    },
    {
      iconPosition: ['inline', 'column'],
      alignment: ['left'],
    }
  ],
  elements: {
    icon: {
      element: 'Icon',
      overwrites: ({variation, elements, globals}) => {
        const { iconPosition, alignment } = variation;
        if(iconPosition === 'top') {
          return {
            margin: '0 0 15px 0',
            fontSize: getFontSize(elements.heading, globals) * 2,
          }
        } else if(iconPosition === 'inline') {
          return {
            margin: alignment === 'left' ? '0 10px 0 0' : '0 0 0 10px',
            fontSize: getFontSize(elements.heading, globals),
          }
        }
        return {
          margin: alignment === 'left' ? '0 15px 0 0' : '0 0 0 15px',
          fontSize: getFontSize(elements.heading, globals),
        }
      }
    },
    heading: {
      element: 'SmallHeading',
    },
    paragraph: {
      element: 'Paragraph',
    }
  }
}

export const defaultProps = ({variation}) => ({
  textAlign: variation.alignment,
})

export const modifiableProps = {
  textAlign: true,
  padding: true,
  margin: true,
};
