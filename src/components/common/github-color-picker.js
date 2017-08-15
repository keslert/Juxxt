import React from 'react';
import styled from 'styled-components';
import { GithubPicker } from 'react-color';
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
  top: 22px;
  right: -8px;
  zIndex: 2;
`;


class GithubColorPicker extends React.Component {

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
    const { colors, onChange } = this.props;

    return (
      <StyledPopover>
        <StyledCover onClick={() => this.setState({open: false})}/>
        <GithubPicker 
          triangle="top-right"
          colors={colors} 
          onChange={value => this.props.onChange(value.hex)}
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

GithubColorPicker.propTypes = {
  colors: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default GithubColorPicker;