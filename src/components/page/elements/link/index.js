import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Link = styled.a``

class Link extends React.PureComponent {
 
  render() {
    const { content } = this.props;

    return(
      <_Link>
        {content.text}
      </_Link>
    )
  }
}
export default Link;
