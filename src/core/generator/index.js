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


function okSectionColors(okBackgrounds,websiteColors,palette) {
  var okPayload = {};
  for(var i=0;i<okBackgrounds.length;i++) {
    okPayload[okBackgrounds[i]] = {
      text:okTextOnBackground(okBackgrounds[i],websiteColors),
      solid:okTextOnBackground(okBackgrounds[i],palette)
    };

    
  }
  return okPayload;
}
/*
helper for getPrimary
*/
function  invertDiff(arr,target) {
  return arr.map((value)=> 1 - Math.abs(value-target));
}

/**
Returns the best primary color in hex string given a palette
*/
function getPrimary(palette) {

  const LUM_TARGET = 0.5;
  const SAT_TARGET = 1;
  const LUM_WEIGHT = 6;
  const SAT_WEIGHT = 4;

  let lumArr = palette.map((color)=> (tinycolor(color).getLuminance()));
  let saturationArr = palette.map((color)=> (tinycolor(color).toHsv()['s']));
  var a = invertDiff(lumArr,LUM_TARGET).map((value)=>value * LUM_WEIGHT);
  var b = invertDiff(saturationArr,SAT_TARGET).map((value)=> value * SAT_WEIGHT);
  var finalArr = []
  for(var i=0;i<palette.length;i++) {
    finalArr.push(( a[i] + b[i] )/ 2);
  }
  return palette[finalArr.indexOf(Math.max(...finalArr))];
}

function getGray(primary,color) {
   var newcolor = tinycolor(color).toHsv()
   newcolor['h'] = tinycolor(primary).toHsv()['h']
   return tinycolor(newcolor).toHexString();
}



export function init() {
  var palette = ["#342E44","#615356","#CE799B","#E6988F","#E5D097"]; //fixed palette: temporary
  var websiteColors = palette.slice()
  

  let primary = getPrimary(palette);
  websiteColors.push(getGray(primary,"#f2f3f4"),getGray(primary,"#fcfcfc"));

  let NUM_OF_PAGES = 5;
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
    websiteColors: websiteColors,
    backgroundBlueprint: okSectionColors(okBackgroundColors(websiteColors),websiteColors,palette.concat("#FFF")),
    isPage: true,
    sections: reduce(range(0, NUM_OF_PAGES), (sections, i) => {
      const skeletons = generateSectionComponentAlternatives({});
      const skeleton = randomItem(skeletons);
      const page = {sections}
      const section = buildSectionFromSkeleton(skeleton, page);

      if(i ==0 | i == NUM_OF_PAGES-1) {
        section.color = {background: primary.replace("#","")}
      } else if((i%2) == 1) {
        section.color = {background: getGray(primary,"#f2f3f4").replace("#","")}
      } else {
        section.color = {background: getGray(primary,"#fcfcfc").replace("#","")}
      }
      
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