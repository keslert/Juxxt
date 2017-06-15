import { generateAlternatives } from './alternatives';
import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { assignContent } from './content';
import { assignStyles } from './style';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import tinycolor from 'tinycolor2';

import { randomItem } from '../utils';
import { range, reduce, uniqueId, forEach, sortBy, map, reverse} from 'lodash';

function okBackgroundColors(arr) {
  var okBackgrounds = [];
  for(var i=0;i<arr.length;i++) {
    for(var j=0;j<arr.length;j++) {
      if(tinycolor.isReadable(arr[j],arr[i],{})) {
        okBackgrounds.push(arr[i]);
        break;
      }
    }
  }
  return okBackgrounds;
}

function okTextOnBackground(bgcolor,arr) {
  let okTexts = [];
  for(let i=0;i<arr.length;i++) {
    okTexts.push({
      color:arr[i],
      readability: tinycolor.readability(arr[i],bgcolor)
    });
  }
  let sortedArr = reverse(sortBy(okTexts, t => (t.readability)));
  return map(sortedArr,'color');
}


function okSectionColors(okBackgrounds,websiteColors) {
  var okPayload = {};
  for(var i=0;i<okBackgrounds.length;i++) {
    okPayload[okBackgrounds[i]] = {text:okTextOnBackground(okBackgrounds[i],websiteColors)}; 
  }
  return okPayload;
}

export function init() {
  //usegen
  var palette = ["#C33C54","#254E70","#37718E","#8EE3EF","#AEF3E7"];
  var websiteColors = palette.slice()
  websiteColors.push("#303030","#afafaf","#fff");
  

  const master = {
    id: 'p_' + uniqueId(),
    palette: palette,
    brandColors: {
      highlight: ['#3ECF8E', '#6772e5'],
      light: {
        text: ['#6b7c93'],
        background: ['#fff', '#F6F9FC'],
      },
      dark: {
        text: ['#c4f0ff', '#fff'],
        background: ['#32325D', '#43458B'],
      }
    },
    backgroundBlueprint: okSectionColors(okBackgroundColors(palette),websiteColors),
    websiteColors:{},
    isPage: true,
    sections: reduce(range(0, 5), (sections, i) => {
      const skeletons = generateSectionComponentAlternatives({});
      const skeleton = randomItem(skeletons);

      const page = {sections}
      const section = buildSectionFromSkeleton(skeleton, page);
      
      section.color = { background: 'light-background-' + i % 2 };
      forEach(section.groups, group => colorGroup(group, page.sections))
      forEach(section.elements, element => colorElement(element, page.sections))
      
      assignContent(section, []);
      assignStyles(section, page);

      return [...sections, section];
    }, [])
  }
  const alternatives = generateAlternatives(master, {component: true}, [master.sections[0]]);  
  return { master, alternatives };
}