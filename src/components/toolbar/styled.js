import styled from 'styled-components';

export const Toolbar = styled.div`
  height: 36px;
  line-height: 36px;
  background: ${props => props.background};  
`
Toolbar.defaultProps = {
  background: '#222',
}

export const ToolbarItem = styled.div`
  font-size: 12px;
  // font-weight: 600;
  cursor: pointer;
  padding: 0 10px;
  ${props => props.selected 
    ? `
      color: #fff;
      background: #03a9f4;
    ` 
    : `
      color: #999;
      &:hover {
        color: #fff;
        background: rgba(0,0,0,.3);
      }
    `
  }
`

export const ToolbarButton = styled.div`
  font-size: 12px;
  // font-weight: 600;
  background: #3accab;
  color: #fff;
  padding: 0 16px;
  cursor: pointer;
`