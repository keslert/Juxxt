import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Landay from '../core/generator/themes/landay';
import HealthyFood from '../core/generator/themes/healthy-food';
import RedRock from '../core/generator/themes/red-rock';
import FashionHipster from '../core/generator/themes/fashion-hipster';
import DessertShop from '../core/generator/themes/dessert-shop';
import { generatePage } from '../core/generator';
import { setAlternatives } from '../core/page';

const StyledLabel = styled.div`
  text-align: center;
  color: #999;
  cursor: pointer;
  padding: 10px;
  font-size: 12px;
  &:hover {
    color: #fff;
  }
`

class TemplatePicker extends React.Component {

  handleClick() {

    const templates = [HealthyFood, Landay, FashionHipster, DessertShop, RedRock];

    const pages = templates.map(generatePage);
    this.props.setAlternatives(pages);
  }

  render() {
    return (
      <StyledLabel onClick={() => this.handleClick()}>
        Browse Templates
      </StyledLabel>
    )
  }
}

const mapDispatchToProps = {
  setAlternatives,
}

export default connect(undefined, mapDispatchToProps)(TemplatePicker);