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
  elements,
  variation,
  props
}) => {


  return (
    <_ProductNavigation {...props} >
      <_Logo>
        <LogoSVG color={elements.link.clones[0].props.color} />
      </_Logo>
      <_DisplayFlex align="center" flex="1">
        <_DisplayFlex flex="1" justify={variation.justify}>
          {elements.link.clones.map(link => (
            <Element key={link.uuid + link.index} {...link} />
          ))}
        </_DisplayFlex>
        <Element {...elements.button} />
      </_DisplayFlex>
    </_ProductNavigation>
  )
}

export default ProductNavigation;

export const requirements = {
  elements: {
    button: {
      element: 'Button',
      overrides: ({variation, elements}) => ({
        text: 'Sign Up',
        type: 'Round',
        fontSize: 12, 
        padding: '12px 24px'
      })
    },
    link: {
      element: 'Link',
      copies: range(1, 6),
      overrides: ({variation, elements}) => ({
        margin: "0 10px 0 0",
      })
    },
  },
  variations: [{
    justify: ['flex-end', 'flex-start'],
  }]
}

export const defaultProps = () => ({

})

export const modifiableProps = {
  
}