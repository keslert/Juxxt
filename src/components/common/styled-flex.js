import styled from 'styled-components';

export const _DisplayFlex = styled.div`
  width: 100%;
  display: flex;

  ${ props => props.justify && `justify-content: ${props.justify}` }
  ${ props => props.align && `align-items: ${props.align}` }
  ${ props => props.wrap && `flex-wrap: ${props.wrap}` }
  ${ props => props.direction && `flex-direction: ${props.direction}` }
  ${ props => props.flex && `flex: ${props.flex}` }
`;



export const _Flex = styled.div`
  flex: ${props => props.flex ? props.flex : 1}
`;