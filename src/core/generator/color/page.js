import { getMostVibrantColor, tintColor, getReadableColors, isSimilarHue } from './utils';
import { zipObject, filter, map, forEach, uniq, flatMap, clone } from 'lodash';
import { absDiff } from '../../utils';
import { getVibrancy, colorMind } from './utils';
import tinycolor from 'tinycolor2';

const PATTERNS = [
  "/images/patterns/texturetastic-gray.png",
  "/images/patterns/binding-dark.png",
  "/images/patterns/light-sketch.png",
  "/images/patterns/tex2res2.png",
  "/images/patterns/escheresque.png",
  "/images/patterns/inspiration-geometry.png",
  "/images/patterns/simple-dashed.png",
  "/images/patterns/food.png",
  "/images/patterns/shattered-dark.png",
  "/images/patterns/gradient-squares.png",
  "/images/patterns/gplay.png",
  "/images/patterns/stardust.png",
  "/images/patterns/cubes.png",
  "/images/patterns/type.png",
  "/images/patterns/escheresque-dark.png",
  "/images/patterns/diamonds.png",
  "/images/patterns/asfalt.png",
]

export const PatternDict = {};
forEach(PATTERNS,function(pattern) {
  getImageLightness(pattern, function(brightness) {
    PatternDict[pattern] = brightness;
  })
});

function getImageLightness(imageSrc,callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function() {
        // create canvas
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        var r,g,b,avg;

        for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];
              

            avg = Math.floor( ((r+g+b)/3) * data[x+3]);
            colorSum += avg;
            
        }

        var brightness = Math.floor(colorSum / (this.width*this.height));
        callback(brightness);
    }
}

function isColorVisibleOnPattern(color) {
  const tc = tinycolor(color);
  return (tc.getBrightness() < 127.5)
}


export function buildPageColorBlueprint(colors) {
  const _colors = uniq([...colors, '#ffffff']).map(color => color.toLowerCase());
  const primary = getMostVibrantColor(_colors);
  const darkGray = tintColor("#211b1a", primary, 20);
  const lightGray = tintColor('#f5f6f7', primary, 20);
  const lightDarkGray = tinycolor(darkGray).brighten(2).toString()
  const allColors = [..._colors, darkGray, lightGray]; // , lightDarkGray];

  const blueprints = filter(allColors.map(color => ({
    color,
    texts: getReadableColors(allColors, color),
  })), blueprint => blueprint.texts.length)
  const DAWK= [];
  const backgrounds = map(blueprints, 'color');
  let _patterns = {};
  forEach(blueprints, blueprint => {
    blueprint.solids = getReadableColors(backgrounds, blueprint.color, 1.4);
    blueprint.gradients = getGradients(blueprint.color, _colors);
    blueprint.patterns = PATTERNS;
  });
  return {
    colors: _colors,
    primary,
    lightDarkGray,
    lightGray,
    darkGray,
    texts: uniq(flatMap(blueprints, 'texts')),
    backgrounds,
    bgBlueprints: zipObject(backgrounds, blueprints),
  }

}

const GRADIENT_DIRECTIONS = ['to left top', 'to right top', 'to right', 'to left', ' to left bottom', 'to right bottom', 'to bottom', 'to top'];
function getGradients(base, colors) {
  const gradients = [];
  
  const _colors = filter(colors, color => color !== base);
  forEach(_colors, color => {
    const _base = tinycolor(base).toHsl();
    const _color = tinycolor(color).toHsl();
    if(absDiff(_base.h, _color.h) < 50 && absDiff(_base.l, _color.l) < 0.2) {
      forEach(GRADIENT_DIRECTIONS, direction => {
        gradients.push({start: base, end: color, direction});
      })
    }
  })

  const darker = tinycolor(base).darken(15).toString();
  forEach(GRADIENT_DIRECTIONS, direction => {
    gradients.push({start: base, end: darker, direction});
  })

  return gradients;
}
