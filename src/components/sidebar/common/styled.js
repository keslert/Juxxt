import styled from 'styled-components';



export const StyledWrap = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  ${props => props.background && 'background: rgba(255,255,255,0.05)'};
`

export const StyledField = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    flex: 1;
  }
`

export const StyledInputWrapper = styled.div`
  width: 120px;
`

export const StyledHeading = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
`;