import React from 'react';
import styled from 'styled-components';
import { PhotoshopPicker } from 'react-color';
import Box from './box';

const StyledCover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const StyledPopover = styled.div`
  position: absolute;
  top: 0;
  right: 18px;
  zIndex: 2;
`;


class ColorPicker extends React.Component {

  constructor(props) {
    super();
    this.state = {
      open: false,
      color: null,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState({color: this.props.color});
  }

  componentWillReceiveProps(props) {
    this.setState({color: props.color});
  }

  handleClose() {
    const { color, onChange } = this.props;
    this.setState({ open: false });
    if(this.state.color !== color) {
      onChange(this.state.color);
    }
  }

  renderPicker() {
    const { color } = this.state;

    return (
      <StyledPopover>
        <StyledCover onClick={this.handleClose} />
        <PhotoshopPicker 
          color={color} 
          onChangeComplete={value => this.setState({color: value.hex})}
          onAccept={this.handleClose}
          onCancel={() => this.setState({open: false})}
          disableAlpha={true}
          />
      </StyledPopover>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <Box position="relative" >
        <div onClick={() => this.setState({open: true})}>
          {this.props.children}
        </div>
        {open && this.renderPicker()}
      </Box>
    );
  }
}

ColorPicker.propTypes = {
  color: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default ColorPicker;