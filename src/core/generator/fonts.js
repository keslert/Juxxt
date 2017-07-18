import { flatMap, values, flatten, filter, map, includes, zipObject, uniq } from 'lodash';
//for a given heading, which paragraph fonts can it take??
export const headings = {
	'Alice': ['Open Sans', 'Raleway', 'Lato', 'Roboto', 'Montserrant'],
	'Amatic SC': ['Josefin Sans', 'Open Sans', 'Raleway', 'Open Sans Condensed', 'La Belle Aurore'],
	'Bitter': ['Raleway', 'Open Sans', 'Roboto', 'Lato'],
	'Josefin Sans': ['Open Sans', 'Lato', 'Open Sans', 'Raleway'],
	'Lato':['Open Sans', 'Raleway', 'Roboto'],
	'Meddon': ['Open Sans'],
	'Merriweather': ['Open Sans','Oswald','Montserrant'],
	'Montserrant': ['Merriweather', 'Open Sans','Raleway', 'Roboto', 'Playfair Display','Lato'],
	'Muli': ['Playfair Display','Montserrant', 'Oswald','Roboto','Lato','Open Sans'],
	'Open Sans': ['Open Sans', 'Lato', 'Roboto'],
	'Open Sans Condensed': ['Open Sans','Raleway'],
	'Oswald': ['Raleway','Open Sans','Lato'],
	'Playfair Display': ['Alice','Raleway'],
	'Quicksand': ['Open Sans', 'Roboto', 'Raleway', 'Lato', 'Oswald'],
	'Raleway': ['Merriweather', 'Roboto','Open Sans'],
	'Roboto': ['Open Sans','Lato','Raleway','Montserrant'],
	'Roboto Slab': ['Roboto','Open Sans','Raleway'],
	'Sacramento': ['Alice','Open Sans Condensed','Raleway'],
	'Work Sans': ['Open Sans','Roboto','Lato','Montserrant'],
}
const allHeadings = Object.keys(headings);  
const paragraphNames = uniq(flatten(values(headings)))
export const paragraphs = zipObject(paragraphNames, map(paragraphNames, name => (
	filter(allHeadings, filter(allHeadings, heading => includes(headings[heading], name)))
)))

console.log(paragraphs);