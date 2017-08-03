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
import { lowerCamelCaseToRegular } from '../../../core/utils';
import Select from '../common/select';
import { paragraphs, headings } from '../../../core/generator/fonts';

import toastr from 'toastr';

const fontOptions = {heading: headings, normal: paragraphs};

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

const StyledTextPanel = styled.div`
  color: #999;
  font-size: 14px;
`


class TextPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      fonts: [],
    }
  }

  componentDidMount() {
    this.resetFonts(this.props.page);
  }

  componentWillReceiveProps(props) {
    this.resetFonts(props.page);
  }

  resetFonts(page) {
    const fonts = page.style.typography;
    this.setState({fonts});
  }

  handleFontExchange(index) {
    const palette = this.state.palette.map((color, i) => ({
      ...color, locked: i !== index
    }));
    this.exchangeColorPalette(palette);  
  }

  exchangeFonts(palette) {
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

  renderFont(fontType, otherFontType) {
    
    const value = this.state.fonts[fontType];
    const otherValue = this.state.fonts[otherFontType];
    const options = fontOptions[otherFontType][otherValue] || [];

    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          {lowerCamelCaseToRegular(fontType)}
        </Box>
        <Box display="flex">
          <Select 
            name={fontType}
            options={options.map(f => ({label: f, value: f}))}
            value={{value, label: value}}
            onChange={() => null}
            />
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => this.handleFontExchange(fontType)} />
          </StyledIcon>
        </Box>
      </Box>
    )
  }

  render() {
    const { palette, open } = this.state;

    return (
      <StyledTextPanel>
        <StyledWrap inset>
          <Collection
            heading={"Typography"}
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            onExchange={e => (e.stopPropagation(), this.exchangeFonts({}))}
            >
            {this.renderFont('heading', 'normal')}
            {this.renderFont('normal', 'heading')}
          </Collection>
        </StyledWrap>
      </StyledTextPanel>
    )
  }
}

const mapDispatchToProps = {
  pushAlternative,
  setAlternatives,
  turnOnModification,
}
export default connect(undefined, mapDispatchToProps)(TextPanel);