import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { map, isEqual, isEmpty , find, cloneDeep } from 'lodash';
import { StyledWrap, StyledButton } from '../common/styled';
import Box from '../../common/box';
import ColorPicker from '../../common/color-picker';
import { fetchColorMindPalette } from '../../../core/generator/color/utils';

import { pushAlternative, setAlternatives } from '../../../core/page';
import { turnOnModification } from '../../../core/ui';
import { generatePageFromPalette, generateTypographyAlternatives, generatePageFromTypography, calculateTypographyWeights, calculateTypographySizes } from '../../../core/generator/alternatives/page';
import { lowerCamelCaseToRegular } from '../../../core/utils';
import Select from '../common/select';
import { paragraphs, headings } from '../../../core/generator/fonts';

import toastr from 'toastr';

const fontOptions = {heading: headings, paragraph: paragraphs};

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
  font-size: 12px;
`


class TextPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      fonts: {},
      style: {},
    }
  }

  componentDidMount() {
    this.resetFonts(this.props.page);
  }

  componentWillReceiveProps(props) {
    this.resetFonts(props.page);
  }

  resetFonts(page) {
    const { alternative } = this.props;
    const fonts = isEmpty(this.state.fonts) ? (page.style.typography) : this.state.fonts;
    this.setState({fonts: fonts});
  }

  exchangeStyles(type) {
    const { pushAlternative, turnOnModification } = this.props;
    const typography = cloneDeep(this.props.page.style.typography);
    if (type==="weight")
      calculateTypographyWeights(typography);
    else
      calculateTypographySizes(typography);
    turnOnModification('page');
    const _page = generatePageFromTypography(this.props.page,typography);
    const n = {fonts: _page.style.typography};
    this.setState(n);
    setTimeout(() => {
      pushAlternative(_page);
    }, 1);
  }

  exchangeFonts(restrictions) {
    const { page, pushAlternative, turnOnModification, setState } = this.props;
    const typ = generateTypographyAlternatives(restrictions,page);
    turnOnModification('page');
    const _page = generatePageFromTypography(page,typ);
    const n = {fonts: _page.style.typography};
    this.setState(n);
    setTimeout(() => {
      pushAlternative(_page);
    }, 1);
  }

  renderFont(fontType, otherFontType) {
    const alt = this.props.alternative;
    const fonts = alt ? alt.style.typography : this.state.fonts;
    const value = fonts[fontType] ? fonts[fontType].fontFamily : fonts[fontType];
    const otherValue = fonts[otherFontType] ? fonts[otherFontType].fontFamily : fonts[otherFontType];
    const options = fontOptions[otherFontType][otherValue] || [];
    const normal = this.props.page.style.typography;
    const locked = false;
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
            onChange={_value => { this.exchangeFonts({[fontType] : _value.value, [otherFontType]: otherValue});}}
            />

          <StyledIcon highlight={locked} onClick={() => null}>
            <i className={`fa fa-${locked ? 'lock' :  'unlock-alt'}`} />
          </StyledIcon>
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => this.exchangeFonts({ [otherFontType] : otherValue }, this.props.page)} />
          </StyledIcon>
        </Box>
      </Box>
    )
  }

  renderFontStyle(fontStyle) {
    const locked = false;
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          {lowerCamelCaseToRegular(fontStyle)}
        </Box>

        <Box display="flex">

          <StyledIcon highlight={locked} onClick={() => null }>
            <i className={`fa fa-${locked ? 'lock' :  'unlock-alt'}`} />
          </StyledIcon>
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => this.exchangeStyles(fontStyle) } />
          </StyledIcon>
        </Box>
      </Box>
    )
  }

  render() {
    const { palette, open } = this.state;
    const alternative = this.props.alternative;
    return (
      <StyledTextPanel>
        <StyledWrap inset>
          <Collection
            heading={"Typography"}
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            onExchange={e => (e.stopPropagation(), this.exchangeFonts({},alternative ? alternative : this.props.page))}
            >
            {this.renderFont('heading', 'paragraph')}
            {this.renderFont('paragraph', 'heading')}
            {this.renderFontStyle('weight')}
            {this.renderFontStyle('size')}
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