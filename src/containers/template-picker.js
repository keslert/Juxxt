import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Landay from '../core/generator/themes/landay';
import HealthyFood from '../core/generator/themes/healthy-food';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import RedRock from '../core/generator/themes/red-rock';
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const templates = [HealthyFood, Landay, FashionHipster, DessertShop, RedRock];
=======
    const templates = [HealthyFood, Landay, FashionHipster, DessertShop];
>>>>>>> Stashed changes
=======
    const templates = [HealthyFood, Landay, FashionHipster, DessertShop];
>>>>>>> Stashed changes
=======
    const templates = [HealthyFood, Landay, FashionHipster, DessertShop];
>>>>>>> Stashed changes
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