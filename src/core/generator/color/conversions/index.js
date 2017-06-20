import { map } from 'lodash';


const pattern_conversions = {
	background: v=> 'ptrn-' + v.substr(1),
	text: v => 'c-' + v.substr(1),
}

const color_conversions = {
  background: v => 'bg-' + v.substr(1),
  text: v => 'c-' + v.substr(1),
}

const gradient_conversions = {
	background: v=> 'grd-' + v.substr(1),
	text: v => 'c-' + v.substr(1),
}



export function convertColorToAtomic(color) {
  if(color['gradient'] != null) {
  	return map(color, (value, key) => (
	    gradient_conversions[key] && gradient_conversions[key](value)
	  )).join(' ');
  }
  else if(color['pattern'] !=null) {
	return map(color, (value, key) => (
	    pattern_conversions[key] && pattern_conversions[key](value)
	  )).join(' ');
  } else {
  return map(color, (value, key) => (
    color_conversions[key] && color_conversions[key](value)
  )).join(' ');
  }
}