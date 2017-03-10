import styled from 'styled-components';

export const _Panel = styled.div`
  position: absolute;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  background: #fff;
  border: 2px solid #eaeaea;
  padding: 10px;
  border-radius: 5px;
  ${props => `
    ${props.top && `top: ${props.top}px;`};
    ${props.left && `left: ${props.left}px;`};
    ${props.bottom && `bottom: ${props.bottom}px;`};
    ${props.right && `right: ${props.right}px;`};
  `}
`