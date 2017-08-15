import styled from 'styled-components';
import theme from '../../../styles/theme';


export const StyledWrap = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  ${props => props.inset && `
    background: rgba(255,255,255,0.05)
    box-shadow: inset 0 2px 2px rgba(0,0,0,0.1);
  `};
`

export const StyledField = styled.div`
  display: flex;
  label {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    flex: 1;
  }
`

export const StyledInputWrapper = styled.div`
  width: 180px;
`

export const StyledButton = styled.div`
  padding: 4px 8px;
  background: ${props => props.background || '#1d1d1d'};
  border-radius: 2px;
  cursor: pointer;
  color: #727272;
  display: inline-block;
  font-size: 11px;
  margin-left: 2px;
  user-select: none;
  &:hover {
    color: #aaa;
  }
`;

export const StyledSidebar = styled.div`
  position: relative;
  height: 100vh;
  background: ${theme.black};
  box-sizing: border-box;
  transform: translateX(${props => props.open ? 0 : 240}px);
  width: ${props => props.open ? 240 : 0}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledHeading = styled.div`
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  text-align: center;
  padding: 10px;
`;