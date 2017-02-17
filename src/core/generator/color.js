import { random } from '../utils';

export function selectTheme() {
  return {
    primary: '#00beef',
    secondary: '#00aeef',
    light: ['#fff'],
    dark: ['#1a2565'],
  }
}


export function selectLayoutShade() {
  return random(['light', 'light', 'light', 'dark']);
}