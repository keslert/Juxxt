import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../../common/svg/logo';
import Element from '../elements';
import { StyledDisplayFlex } from '../../common/styled-base';
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
      <StyledDisplayFlex align="center" flex="1">
        <StyledDisplayFlex flex="1" justify={variation.justify}>
          {elements.link.clones.map(link => (
            <Element key={link.uuid} {...link} />
          ))}
        </StyledDisplayFlex>
        <Element {...elements.button} />
      </StyledDisplayFlex>
    </_ProductNavigation>
  )
}

export default ProductNavigation;



export const requirements = {
  elements: {
    button: {
      element: 'Button',
      overwrites: ({variation, elements}) => ({
        text: 'Sign Up',
        type: 'Round',
        fontSize: 12, 
        padding: '12px 24px'
      })
    },
    link: {
      element: 'Link',
      overwrites: ({variation, elements}) => ({
        margin: "0 10px 0 0",
      }),
      copies: 'links',
    },
  },
  variations: [{
    justify: ['flex-end', 'flex-start'],
    links: range(1, 6),
  }]
}

export const defaultProps = () => ({

})

export const modifiableProps = {
  
}