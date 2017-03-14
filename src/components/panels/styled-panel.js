import styled from 'styled-components';

export const _Panel = styled.div`
  position: absolute;
  box-shadow: 0 2px 20px rgba(0,0,0,0.5);
  background: #fff;
  border: 2px solid #eaeaea;
  padding: 10px;
  border-radius: 5px;
  background: #eaeaea;
  ${props => `
    ${props.top && `top: ${props.top}px;`};
    ${props.left && `left: ${props.left}px;`};
    ${props.bottom && `bottom: ${props.bottom}px;`};
    ${props.right && `right: ${props.right}px;`};
  `}
  width: 300px;
`