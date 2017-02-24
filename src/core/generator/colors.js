import { randomItem } from '../utils';

export function selectColors() {
  const stripe = {
    primary: '#3ECF8E',
    secondary: '#6772e5',
    tertiary: '#F6A4EB',
    text: '#6b7c93',
    invertedText: '#c4f0ff',
    dark: '#32325D',
    offDark: '#43458B',
    light: '#fff',
    offLight: '#F6F9FC',
  }

  return stripe;
}

export function selectSchema() {
  return {
    luminosity: randomItem(['light', 'dark']),
    variation: 0,
  }
}

export function generatePalette(colors, schema) {
  if(schema.luminosity === 'light') {
    return primaryLight(colors);
  } else {
    return primaryDark(colors);
  }
}


function primaryLight(colors) {
  return {
    background: colors.light,
    primary: colors.primary,
    secondary: colors.secondary,
    text: colors.text,
    textHighlight: colors.dark,
  }
}

function secondaryLight(colors) {
  return Object.assign({
    background: colors.offLight,
  }, primaryLight(colors))
}

function primaryDark(colors) {
  return {
    background: colors.dark,
    primary: colors.primary,
    secondary: colors.light,
    text: colors.invertedText,
    textHighlight: colors.light,
    links: colors.light,
  }
}