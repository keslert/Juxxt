import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../../common/svg/logo';
import Element from '../elements';
import { _DisplayFlex } from '../../common/styled-base';
import { range } from 'lodash';


const _ProductNavigation = styled.div`
  display: flex;
  padding: 10px 0px;
  ${props => `
    color: ${props.color};
  `}
`

const _Logo = styled.div`
  margin-right: 20px;
  width: 150px;
`

const _Link = styled.div`
  margin-right: 10px;
`

const ProductNavigation = ({
  requirements,
  userOverrides,
  palette,
}) => {

  const color = palette.text;

  const props = { color, ...userOverrides };

  return (
    <_ProductNavigation {...props} >
      <_Logo>
        <LogoSVG color={palette.textHighlight} />
      </_Logo>
      <_DisplayFlex align="center" flex="1">
        <_DisplayFlex flex="1" justify={requirements.justify}>
          {range(0, requirements.items).map(i => (
            <Element key={i} {...requirements.link} overrides={{margin: "0 10px 0 0"}} />
          ))}
        </_DisplayFlex>
        <Element 
          {...requirements.button} 
          background={palette.primary} 
          color={'#fff'} 
          overrides={{
            text: 'Sign Up',
            type: 'Round',
            fontSize: 12, 
            padding: '12px 24px'
          }} 
          />
      </_DisplayFlex>
    </_ProductNavigation>
  )
}

export default ProductNavigation;

export const requirements = {
  items: {
    options: range(1, 6),
  },
  button: {
    type: 'Element',
    options: ['Button'],
  },
  link: {
    type: 'Element',
    options: ['Link'],
  },
  justify: {
    options: ['flex-end', 'flex-start'],
  }
}

export const params = {
  
}