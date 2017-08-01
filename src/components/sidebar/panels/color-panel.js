import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { map, isEqual } from 'lodash';
import { StyledWrap, StyledButton } from '../common/styled';
import Box from '../../common/box';

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
`;

const StyledIcon = styled.div`
  color: #999;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: rgba(0,0,0,.3);
    color: #fff;
  }
`

const StyledTextButton = styled.div`
  cursor: pointer;
`

const StyledColorPanel = styled.div`
  color: #999;
  font-size: 14px;
`


class ColorPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      palette: [],
    }
  }

  componentDidMount() {
    this.resetPalette(this.props.palette);
  }

  componentWillReceiveProps(props) {
    this.resetPalette(props.palette);
  }

  resetPalette(palette) {
    this.setState({palette});
  }

  renderColor(color, index) {
    const locked = false;

    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          <StyledPixel color={color} />
          <Box marginLeft="4px">{color}</Box>
        </Box>
        <Box display="flex">
          <StyledIcon>
            <i className={`fa fa-${locked ? 'lock' :  'unlock-alt'}`} onClick={() => null} />
          </StyledIcon>
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => null} />
          </StyledIcon>
        </Box>
      </Box>
    )
  }

  render() {
    const { palette, open } = this.state;

    return (
      <StyledColorPanel>
        <StyledWrap inset>
          <Collection heading={"Palette"} open={open} onToggleOpen={() => this.setState({open: !open})}>
            {palette.map((color, i) => (
              <div key={color}>
                {this.renderColor(color, i)}
              </div>
            ))}
            <Box marginLeft="3px" marginTop="4px">
              <StyledTextButton><i className="fa fa-plus-circle" /> Add color</StyledTextButton>
            </Box>
          </Collection>
        </StyledWrap>
      </StyledColorPanel>
    )
  }
}

const mapDispatchToProps = {

}
export default connect(undefined, mapDispatchToProps)(ColorPanel);