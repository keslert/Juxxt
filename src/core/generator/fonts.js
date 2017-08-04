import { flatMap, values, flatten, filter, map, includes, zipObject, uniq } from 'lodash';

export const headings = {
	'Alice': ['Open Sans', 'Raleway', 'Lato', 'Roboto', 'Montserrat'],
	'Amatic SC': ['Josefin Sans', 'Open Sans', 'Raleway', 'Open Sans Condensed', 'La Belle Aurore'],
	'Bitter': ['Bitter', 'Raleway', 'Open Sans', 'Roboto', 'Lato'],
	'Josefin Sans': ['Josefin Sans', 'Open Sans', 'Lato', 'Open Sans', 'Raleway'],
	'Lato':['Lato', 'Open Sans', 'Raleway', 'Roboto'],
	'Meddon': ['Open Sans'],
	'Merriweather': ['Open Sans','Oswald','Montserrat'],
	'Montserrat': ['Merriweather', 'Open Sans','Raleway', 'Roboto', 'Playfair Display','Lato'],
	'Muli': ['Playfair Display','Montserrat', 'Oswald','Roboto','Lato','Open Sans'],
	'Open Sans': ['Open Sans', 'Lato', 'Roboto'],
	'Open Sans Condensed': ['Open Sans','Raleway'],
	'Oswald': ['Raleway','Open Sans','Lato'],
	'Playfair Display': ['Alice','Raleway','Playfair Display'],
	'Quicksand': ['Open Sans', 'Roboto', 'Raleway', 'Lato', 'Oswald'],
	'Raleway': ['Raleway', 'Merriweather', 'Roboto','Open Sans'],
	'Roboto': ['Roboto','Open Sans','Lato','Raleway','Montserrat'],
	'Roboto Slab': ['Roboto','Open Sans','Raleway'],
	'Sacramento': ['Alice','Open Sans Condensed','Raleway'],
	'Work Sans': ['Work Sans', 'Open Sans','Roboto','Lato','Montserrat'],
}
const allHeadings = Object.keys(headings);  
const paragraphNames = uniq(flatten(values(headings)))
export const paragraphs = zipObject(paragraphNames, map(paragraphNames, name => (
	filter(allHeadings, heading => includes(headings[heading], name))
)))

export const fontDetails = {
	'Alice': {
		weights: [400],
		canUppercase: true,
	},
	'Amatic SC': {
		weights: [400, 700],
		canUppercase: false,
	},
	'Bitter': {
		weights: [400, 700, '400-italic'],
		canUppercase: true,
	},
	'Josefin Sans': {
		weights: [100, 300, 400, 600, 700, '100-italic', '300-italic', '400-italic', '600-italic', '700-italic'],
		canUppercase: true,
	},
	'La Belle Aurore': {
		weights: [400],
		canUppercase: true,
	},
	'Lato': {
		weights: [100, 300, 400, 700, 900, '100-italic', '300-italic', '400-italic', '700-italic', '900-italic'],
		canUppercase: true,
	},
	'Meddon': {
		weights: [400],
		canUppercase: false,
	},
	'Merriweather': {
		weights: [300, 400, 700, 900, '300-italic', '400-italic', '700-italic', '900-italic'],
		canUppercase: true,
	},
	'Montserrat': {
		weights: [400, 700],
		canUppercase: true,
	},
	'Muli': {
		weights: [300, 400, '300-italic', '400-italic'],
		canUppercase: true,
	},
	'Open Sans': {
		weights: [300, 400, 600, 700, 900, '300-italic', '400-italic', '600-italic', '700-italic', '900-italic'],
		canUppercase: true,
	},
	'Open Sans Condensed': {
		weights: [300, 700, '300-italic'],
		canUppercase: true,
	},
	'Oswald': {
		weights: [300, 400, 700],
		canUppercase: true,
	},
	'Playfair Display': {
		weights: [400, 700, 900, '400-italic', '700-italic', '900-italic'],
		canUppercase: true,
	},
	'Quicksand': {
		weights: [300, 400, 700],
		canUppercase: true,
	},
	'Raleway': {
		weights: [100, 200, 300, 400, 500, 600, 700, 900],
		canUppercase: true,
	},
	'Roboto': {
		weights: [100, 300, 400, 500, 700, 900, '100-italic', '300-italic', '400-italic', '500-italic', '700-italic', '900-italic'],
		canUppercase: true,
	},
	'Roboto Slab': {
		weights: [100, 300, 400, 700],
		canUppercase: true,
	},
	'Sacramento': {
		weights: [400],
		canUppercase: false,
	},
	'Work Sans': {
		weights: [100, 200, 300, 400, 500, 600, 700, 900],
		canUppercase: true,
	},
}