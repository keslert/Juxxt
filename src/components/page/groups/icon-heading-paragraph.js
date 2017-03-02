import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';
import { _Flex, _DisplayFlex, _Block } from '../../common/styled-base';
import { getFontSize } from '../elements/heading';



const IconHeadingParagraph = ({
  requirements,
  sectionOverrides,
  userOverrides,
  palette,
}) => {
  const props = {
    maxWidth: 600,
    textAlign: requirements.alignment,
    ...sectionOverrides,
    ...userOverrides,
  }

  if(requirements.iconPosition === 'left-heading') {
    return (
      <_Block {...props} textAlign="left">
        <_DisplayFlex>
          <Element 
            {...requirements.icon} 
            color={palette.primary} 
            overrides={{
              fontSize: getFontSize(requirements.heading),
              margin: "0 10px 0 0",
            }}
            />
          <_Flex>
            <Element {...requirements.heading} color={palette.textHighlight} />
          </_Flex>
        </_DisplayFlex>
        <Element {...requirements.paragraph} color={palette.text} />
      </_Block>
    )
  }

  if(requirements.iconPosition === 'left-column') {
    return (
      <_Block {...props} textAlign="left">
        <_DisplayFlex>
          <Element 
            {...requirements.icon} 
            color={palette.primary} 
            overrides={{
              fontSize: getFontSize(requirements.heading),
              margin: "0 15px 0 0",
            }}
            />
          <_Flex>
            <div><Element {...requirements.heading} color={palette.textHighlight} /></div>
            <div><Element {...requirements.paragraph} color={palette.text} /></div>
          </_Flex>
        </_DisplayFlex>
      </_Block>
    )
  }

  return (
    <_Block {...props}>
      <div>
        <Element {...requirements.icon} color={palette.primary} />
      </div>
      <div>
        <Element {...requirements.heading} color={palette.textHighlight} />
      </div>
      <div>
        <Element {...requirements.paragraph} color={palette.text} />
      </div>
    </_Block>
  )
}
export default IconHeadingParagraph;


export const requirements = {
  icon: {
    type: 'Element',
    options: ['Icon'],
  },
  heading: {
    type: 'Element',
    options: ['Heading'],
  },
  paragraph: {
    type: 'Element',
    options: ['Paragraph'],
  },
  alignment: {
    options: ['left', 'center'],
  },
  iconPosition: {
    options: ['top', 'left-heading', 'left-column']
  }
}

export const params = {
  textAlign: true,
  padding: true,
  margin: true,
};