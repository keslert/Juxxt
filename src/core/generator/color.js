import { randomItem } from '../utils';

export function selectTheme() {
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

export function selectPallet(theme) {
  return randomItem([primaryLight, primaryDark, secondaryLight])(theme);
}

function primaryLight(theme) {
  return {
    background: theme.light,
    primary: theme.primary,
    secondary: theme.secondary,
    text: theme.text,
    textHighlight: theme.dark,
  }
}

function secondaryLight(theme) {
  return Object.assign({
    background: theme.offLight,
  }, primaryLight(theme))
}

function primaryDark(theme) {
  return {
    background: theme.dark,
    primary: theme.primary,
    secondary: theme.light,
    text: theme.invertedText,
    textHighlight: theme.light,
    links: theme.light,
  }
}