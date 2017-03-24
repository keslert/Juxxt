import { randomItem } from '../utils';
import { filter, includes, random } from 'lodash';

export function selectColors() {
  const stripe = {
    primary: '#3ECF8E',
    secondary: '#6772e5',
    text: '#6b7c93',
    textOnDark: '#c4f0ff',
    dark: '#32325D',
    offDark: '#43458B',
    light: '#fff',
    offLight: '#F6F9FC',
  }
  const scale = {
    primary: '#ff9800',
    secondary: '#03a9f4',
    text: '#6C6C6C',
    textOnDark: 'rgba(255,255,255,0.7)',
    dark: '#250f23',
    offDark: '#331631',
    light: '#fff',
    offLight: '#F5F5F7',
  }

  const quartzy = {
    primary: '#F35919',
    secondary: '#1EA9E3',
    text: '#515359',
    textOnDark:'rgba(255,255,255,0.7)',
    dark: '#1D1412',
    offDark: '#78665C',
    light: '#fff',
    offLight: '#F5F5F7',
  }

  return randomItem([stripe, scale, quartzy]);
}

export function selectPalette(props, version) {
  return generatePalette(props.globals.colors, version || random(0, 3));
}

export function generatePaletteAlternatives(colors, palette) {
  return [palette];
}

export function generatePalettes(colors) {
  const lights = lightBackgrounds(colors);
  const darks = darkBackgrounds(colors);
  const backgrounds = [...lights, ...darks];

  return backgrounds.map(background => (
    includes(lights, background)
    ? generateLightPalette(colors, background)
    : generateDarkPalette(colors, background)
  ))
}

export function generatePalette(colors, version) {
  const lights = lightBackgrounds(colors);
  const darks = darkBackgrounds(colors);
  const backgrounds = [...lights, ...darks];
  
  const background = backgrounds[version % backgrounds.length];
  const isLight = includes(lights, background);
  
  const palette =  isLight
    ? generateLightPalette(colors, background)
    : generateDarkPalette(colors, background);
  
  palette.version = version;
  return palette;
}

function generateLightPalette(colors, background) {
  return {
    background,
    primary: colors.primary,
    secondary: colors.secondary,
    text: colors.text,
    textHighlight: colors.dark,
    icon: colors.primary,
    link: colors.text,
    button: buttonColorsOnLight(colors, background)[0],
  }
}

function generateDarkPalette(colors, background) {
  return {
    background,
    primary: colors.primary,
    secondary: colors.secondary,
    text: colors.textOnDark,
    textHighlight: colors.light,
    icon: colors.primary,
    link: colors.textOnDark,
    button: buttonColorsOnDark(colors, background)[0],
  }
}


function darkBackgrounds(colors) {
  return [
    colors.dark,
    colors.offDark,
    colors.primary,
    colors.secondary,
  ];
}

function lightBackgrounds(colors) {
  return [
    colors.light,
    colors.offLight,
  ];
}

function buttonColorsOnDark(colors, background) {
  return filter([
    {background: colors.primary, color: colors.light},
    {background: colors.light, color: background},
    {background: colors.light, color: colors.dark},
    {background: colors.secondary, color: colors.light},
    {background: colors.dark, color: colors.light},
    {background: colors.offDark, color: colors.light},
    {background: 'transparent', color: colors.light},
    {background: 'transparent', color: colors.light, border: `2px solid ${colors.light}`},
  ], c => c.background !== background);
}

function buttonColorsOnLight(colors, background) {
  return [
    {background: colors.primary, color: colors.light},
    {background: colors.secondary, color: colors.light},
    {background: colors.dark, color: colors.light},
    {background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}`},
    {background: 'transparent', color: colors.primary},
  ]
}