import styled from 'styled-components';

export const StyledSelectableText = styled.div`
  color: ${props => props.selected ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)'};
  &:hover {
    color: rgba(255,255,255,1);
  }
  cursor: pointer;
`;