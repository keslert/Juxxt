import React from 'react';

class Icon extends React.PureComponent {
  render() {
    const { content } = this.props;
    return (
      <i className={`fa fa-${content.type} fs6`}></i>
    )
  }
}
export default Icon;