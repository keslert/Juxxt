import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { map, 
  isEqual, 
  isEmpty , 
  find, 
  cloneDeep, 
  mapValues, 
  includes,
} from 'lodash';
import { StyledWrap, StyledButton } from '../common/styled';
import Box from '../../common/box';
import ColorPicker from '../../common/color-picker';
import { fetchColorMindPalette } from '../../../core/generator/color/utils';

import { pushAlternative, setAlternatives } from '../../../core/page';
import { turnOnModification } from '../../../core/ui';
import { generatePageFromPalette, generatePageFromTypography } from '../../../core/generator/alternatives/page';
import { lowerCamelCaseToRegular } from '../../../core/utils';
import Select from '../common/select';
import { 
  generateTypography, 
  calculateTypographyWeights,
  calculateTypographySizes,
} from '../../../core/generator/font/font-utils';

import { paragraphs, headings } from '../../../core/generator/font';

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
      locked: {
        heading: false,
        paragraph: false,
        weight: false,
        size: false,
      }
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

  exchange() {
    const { locked } = this.state;
    const blueprint = mapValues(this.props.page.style.typography, (obj, key) => {
      const fontType = includes(fontBuckets.heading, key) ? 'heading' : 'paragraph';
      return {
        ...obj,
        fontFamily: locked[fontType] ? obj.fontFamily : undefined,
        fontSize: locked['size'] ? obj.fontSize : undefined,
        fontWeight: locked['weight'] ? obj.fontWeight : undefined,
      }
    })

    this.exchangeTypography(blueprint);
  }

  exchangeStyle(type) {
    const _type = type === 'weight' ? 'fontWeight' : 'fontSize';
    const blueprint = mapValues(this.props.page.style.typography, obj => ({
      ...obj,
      [_type]: undefined,
    }))
    this.exchangeTypography(blueprint);
  }

  exchangeFont(type, value) {
    const bucket = fontBuckets[type];
    const blueprint = mapValues(this.props.page.style.typography, (obj, key) => ({
      ...obj,
      fontFamily: includes(bucket, key) ? value : obj.fontFamily,
    }))
    this.exchangeTypography(blueprint);
  }

  exchangeTypography(blueprint) {
    const { page, pushAlternative, turnOnModification } = this.props;
    turnOnModification('page');

    const typography = generateTypography(blueprint, page);
    const _page = generatePageFromTypography(page, typography);
    this.setState({fonts: _page.style.typography});
    
    setTimeout(() => {
      pushAlternative(_page);
    }, 1);
  }

  toggleLocked(name) {
    const locked = {...this.state.locked, [name]: !this.state.locked[name]};
    this.setState({locked});
  }

  renderFont(fontType, otherFontType) {
    const alt = this.props.alternative;
    const fonts = alt ? alt.style.typography : this.state.fonts;
    const value = fonts[fontType] ? fonts[fontType].fontFamily : fonts[fontType];
    const otherValue = fonts[otherFontType] ? fonts[otherFontType].fontFamily : fonts[otherFontType];
    const options = fontOptions[otherFontType][otherValue] || [];
    const normal = this.props.page.style.typography;
    
    const locked = this.state.locked[fontType];
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
            onChange={({value}) => this.exchangeFont(fontType, value)}
            />

          <StyledIcon highlight={locked} onClick={() => this.toggleLocked(fontType)}>
            <i className={`fa fa-${locked ? 'lock' :  'unlock-alt'}`} />
          </StyledIcon>
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => this.exchangeFont(fontType) }/>
          </StyledIcon>
        </Box>
      </Box>
    )
  }

  renderFontStyle(fontStyle) {
    const locked = this.state.locked[fontStyle];
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          {lowerCamelCaseToRegular(fontStyle)}
        </Box>

        <Box display="flex">

          <StyledIcon highlight={locked} onClick={() => this.toggleLocked(fontStyle) }>
            <i className={`fa fa-${locked ? 'lock' :  'unlock-alt'}`} />
          </StyledIcon>
          <StyledIcon>
            <i className='fa fa-exchange' onClick={() => this.exchangeStyle(fontStyle) } />
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
            onExchange={e => (e.stopPropagation(), this.exchange())}
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

const fontBuckets = {
  heading: ['heading', 'largeHeading', 'smallHeading'],
  paragraph: ['kicker', 'subheading', 'paragraph'],
}