import React from 'react';

class Icon extends React.PureComponent {
  render() {
    const { content } = this.props;
    return (
      <i className={`fa fa-${content.type}`}></i>
    )
  }
}
export default Icon;