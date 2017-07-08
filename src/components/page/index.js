import React from 'react';
import styled from 'styled-components';
import { getGradient } from '../../core/generator/color/utils';
import Section from './sections';
import InsertionTarget from './insertion-target';
import { isFunction, map } from 'lodash';

const StyledPage = styled.div`
  ${props => `
    ${props.clickable && `
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.01);
      }
      .section {
        pointer-events: none;
      }
    `};
    
    ${props.extraRules}
  `};
`;


    const PICTURES = ['baby.jpg',
   'burger.jpg',
   'beachChairs.jpg',
   'camera1.jpg',
   'coffee.jpg',
   'coffeeMagazineFlower.jpg',
   'coupleBikeBeach.jpg',
   'fallLeaves2.jpg',
   'fancyBurger.jpg',
   'fancyFood.jpg',
   'fashionGlasses.jpeg',
   'greenleaf.jpg',
   'kidWithSunglasses.jpg',
   'macarons.jpg',
   'nyc.jpg',
   'oceanSunset.jpg',
   'pancake1.jpg',
   'railroadShoes.jpg',
   'rain.jpg',
   'ruralHighway.jpg',
   'silhouette.jpg',
   'Suit.jpg',
   'sunflower.jpg',
   'traveler.jpg',
   'waterfall.jpg'];

class Page extends React.PureComponent {

  render() {
    const { sections, master, onClick, id, colorBlueprint } = this.props;
    const last = sections.length - 1;

    const gradientColors = map(colorBlueprint.bgBlueprints, blueprint => 
      blueprint.gradients.map(gradObj=> `
        .grd-${gradObj.start.substr(1)}-${gradObj.end.substr(1)}-${gradObj.direction.replace(/\s+/g, '')} {
          background: linear-gradient(${gradObj.direction}, ${gradObj.start}, ${gradObj.end});
        }\n
      `)
    ).join('\n');

    const backgroundImages = PICTURES.map(pic => `
      .bgimg-${pic.split('.')[0]} {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/openSourceImages2017/${pic}) !important;
        background-size: cover !important;
        background-position: center center !important;
      }\n
    `).join('\n');

    const textColors = colorBlueprint.texts.map((color) => `
      .c-${color.substr(1)} { color: ${color}; }
    `).join('\n');

    const backgroundColors = colorBlueprint.backgrounds.map((color) => `
      .bg-${color.substr(1)} { background: ${color}; }
      .b-${color.substr(1)} { border-color: ${color}; }
    `).join('\n');
      

    const patternColors = sections.map(section => section.color.pattern && `
      .ptrn-${section.color.pattern} {
        background: ${section.color._pattern};
        background-size: 75%;
      }\n
    `).join('\n');

    const extraRules = [ textColors, backgroundColors, gradientColors, patternColors, backgroundImages ].join('\n');

    const clickable = isFunction(onClick);
    return (
      <StyledPage onClick={onClick} clickable={clickable} className={id} extraRules={extraRules}>
        {sections.map((section, i) => (
          <div key={i} style={{marginTop: -1}}>
            <Section {...section} master={master} index={master ? i : 1000 + i} draggable={!clickable} />
            {master && <InsertionTarget index={i} />}
          </div>
        ))}
      </StyledPage>
    )
  }
}

export default Page;