import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';
import { _Flex, _DisplayFlex } from '../../common/styled-flex';
import { getFontSize } from '../elements/heading';

const _Wrap = styled.div`
  ${props => `
    text-align: ${props.textAlign};
    padding: ${props.padding || "0"};
    flex-direction: ${props.direction};
  `}
`

const IconHeadingParagraph = ({
  requirements,
  overrides,
  palette,
}) => {
  const props = {
    textAlign: requirements.alignment,
    ...overrides,
  }

  if(requirements.iconPosition === 'left-heading') {
    return (
      <_Wrap {...props} textAlign="left">
        <_DisplayFlex>
          <Element 
            {...requirements.icon} 
            color={palette.primary} 
            fontSize={getFontSize(requirements.heading)} 
            margin="0 10px 0 0"
            />
          <_Flex>
            <Element {...requirements.heading} color={palette.textHighlight} />
          </_Flex>
        </_DisplayFlex>
        <Element {...requirements.paragraph} color={palette.text} />
      </_Wrap>
    )
  }

  if(requirements.iconPosition === 'left-column') {
    return (
      <_Wrap {...props} textAlign="left">
        <_DisplayFlex>
          <Element 
            {...requirements.icon} 
            color={palette.primary} 
            fontSize={getFontSize(requirements.heading)} 
            margin="0 15px 0 0"
            />
          <_Flex>
            <div><Element {...requirements.heading} color={palette.textHighlight} /></div>
            <div><Element {...requirements.paragraph} color={palette.text} /></div>
          </_Flex>
        </_DisplayFlex>
      </_Wrap>
    )
  }

  return (
    <_Wrap {...props}>
      <div>
        <Element {...requirements.icon} color={palette.primary} />
      </div>
      <div>
        <Element {...requirements.heading} color={palette.textHighlight} />
      </div>
      <div>
        <Element {...requirements.paragraph} color={palette.text} />
      </div>
    </_Wrap>
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
};