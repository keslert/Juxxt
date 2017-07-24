import React from 'react';
import styled from 'styled-components';
import { fadeOut } from './styled-animations';


const StyledNotification = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  padding: 16px;
  background: rgba(122,122,122,0.4);
  color: #fff;
  border-radius: 8px;
  z-index: 999999;
`

class Notification extends React.PureComponent {
  render() {
    return (
      <StyledNotification>
        {this.props.children}
      </StyledNotification>
    )
  }
}

export default Notification;