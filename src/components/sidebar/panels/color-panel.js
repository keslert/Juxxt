import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { map, isEqual, find } from 'lodash';
import { StyledWrap, StyledButton } from '../common/styled';
import Box from '../../common/box';
import ColorPicker from '../../common/color-picker';
import { fetchColorMindPalette } from '../../../core/generator/color/utils';

import { pushAlternative, setAlternatives } from '../../../core/page';
import { turnOnModification } from '../../../core/ui';
import { generatePageFromPalette } from '../../../core/generator/alternatives/page';

import toastr from 'toastr';

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
  cursor: pointer;
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
  ${props => props.highlight && `
    color: #03a9f4;
  `}
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
    this.resetPalette(this.props.page);
  }

  componentWillReceiveProps(props) {
    this.resetPalette(props.page);
  }

  resetPalette(page) {
    const palette = page.colorBlueprint.colors;
    this.setState({
      palette: palette.map(color => {
        const old = find(this.state.palette, c => c.color === color) || {};
        return { color, locked: old.locked }
      })
    })
  }

  updatePalette(palette) {
    const { page, pushAlternative, turnOnModification } = this.props;
    turnOnModification('page');
    this.setState({palette});
    const alternative = generatePageFromPalette(page, map(palette, 'color'));

    setTimeout(() => {
      pushAlternative(alternative);
    }, 1);
  }

  handleColorChange(color, index) {
    const palette = this.state.palette.map((c, i) => i !== index ? c : {...c, color});
    this.updatePalette(palette);
  }

  handleColorExchange(index) {
    const palette = this.state.palette.map((color, i) => ({
      ...color, locked: i !== index
    }));
    this.exchangeColorPalette(palette);  
  }

  handleColorAdd() {
    const palette = this.state.palette.map((color) => ({...color, locked: true}));
    palette.push({locked: false});
    this.exchangeColorPalette(palette);
  }

  handleColorRemove(index) {
    this.updatePalette([
      ...this.state.palette.slice(0, index),
      ...this.state.palette.slice(index + 1)
    ]);
  }

  exchangeColorPalette(palette) {
    const { page, pushAlternative } = this.props;
    fetchColorMindPalette(
      palette, 
      _palette => {
        const __palette = palette.map((color, i) => ({
          color: _palette[i],
          locked: this.state.palette[i] && this.state.palette[i].locked,
        }))
        this.updatePalette(__palette);
      },
      error => toastr.error('There was an error when we tried to fetch a new palette...', error)
    )
  }

  toggleColorLock(index) {
    this.setState({
      palette: this.state.palette.map((color, i) =>
        i !== index ? color : {...color, locked: !color.locked}
      )
    })
  }

  renderColor(color, index) {

    const canDelete = this.state.palette.length > 1;
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          <ColorPicker color={color.color} onChange={value => this.handleColorChange(value, index)}>
            <StyledPixel color={color.color} />
          </ColorPicker>
          <Box marginLeft="4px">{color.color}</Box>
        </Box>
        <Box display="flex">

          {canDelete && 
            <StyledIcon highlight={color.locked} onClick={() => this.handleColorRemove(index)}>
              <i className='fa fa-times' />
            </StyledIcon>
          }

          <StyledIcon highlight={color.locked} onClick={() => this.toggleColorLock(index)}>
            <i className={`fa fa-${color.locked ? 'lock' :  'unlock-alt'}`} />
          </StyledIcon>
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => this.handleColorExchange(index)} />
          </StyledIcon>
        </Box>
      </Box>
    )
  }

  

  render() {
    const { palette, open } = this.state;

    const canAdd = palette.length < 5;
    return (
      <StyledColorPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Palette"} 
            open={open} 
            onToggleOpen={() => this.setState({open: !open})}
            onExchange={e => (e.stopPropagation(), this.exchangeColorPalette(palette))}
            >
            {palette.map((color, i) => (
              <div key={i}>
                {this.renderColor(color, i)}
              </div>
            ))}
            {canAdd &&
              <Box marginLeft="3px" marginTop="4px">
                <StyledTextButton onClick={() => this.handleColorAdd()}>
                  <i className="fa fa-plus-circle" /> Add color
                </StyledTextButton>
              </Box>
            }
          </Collection>
        </StyledWrap>
      </StyledColorPanel>
    )
  }
}

const mapDispatchToProps = {
  pushAlternative,
  setAlternatives,
  turnOnModification,
}
export default connect(undefined, mapDispatchToProps)(ColorPanel);