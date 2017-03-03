import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';
import { _Flex, _DisplayFlex, _Block } from '../../common/styled-base';
import { getFontSize } from '../elements/small-heading';



const IconSmallHeadingParagraph = ({
  requirements,
  overrides,
  userOverrides,
  palette,
}) => {
  const props = {
    textAlign: requirements.alignment,
    ...overrides,
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
        <Element 
          {...requirements.icon} 
          color={palette.primary} 
          overrides={{
            fontSize: getFontSize(requirements.heading) * 2,
            margin: "0 0 10px 0",
          }}
          />
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
export default IconSmallHeadingParagraph;


export const requirements = {
  icon: {
    type: 'Element',
    options: ['Icon'],
  },
  heading: {
    type: 'Element',
    options: ['SmallHeading'],
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