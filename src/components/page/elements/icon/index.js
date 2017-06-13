import React from 'react';

class Icon extends React.PureComponent {
  render() {
    const { content } = this.props;
    return (
      <div className="element">
        {content.src
          ? <img src={content.src} alt="icon" />
          : <i className={`fa fa-${content.type}`}></i>
        }
      </div>
    )
  }
}
export default Icon;