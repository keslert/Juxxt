import { flatMap, values, flatten, filter, map, includes, zipObject, uniq } from 'lodash';

export const headings = {
	'Alice': ['Open Sans', 'Raleway', 'Lato', 'Roboto', 'Montserrat'],
	'Amatic SC': ['Josefin Sans', 'Open Sans', 'Raleway', 'Open Sans Condensed', 'La Belle Aurore'],
	Anton: ['Open Sans Condensed', 'EB Garamond'],
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
		weights: [4],
		transforms: ['uppercase', 'none'],
	},
	'Amatic SC': {
		weights: [4, 7],
		transforms: ['uppercase'],
	},
	Anton: {
		weights: [4],
		transforms: ['none', 'uppercase']
	},
	'Bitter': {
		weights: [4, 7, '4-i'],
		transforms: ['uppercase', 'none'],
	},
	'Josefin Sans': {
		weights: [1, 3, 4, 6, 7, '1-i', '3-i', '4-i', '6-i', '7-i'],
		transforms: ['uppercase', 'none'],
	},
	'La Belle Aurore': {
		weights: [4],
		transforms: ['none'],
	},
	'Lato': {
		weights: [1, 3, 4, 7, 9, '1-i', '3-i', '4-i', '7-i', '9-i'],
		transforms: ['uppercase', 'none'],
	},
	'Meddon': {
		weights: [4],
		transforms: ['none'],
	},
	'Merriweather': {
		weights: [3, 4, 7, 9, '3-i', '4-i', '7-i', '9-i'],
		transforms: ['uppercase', 'none'],
	},
	'Montserrat': {
		weights: [4, 7],
		transforms: ['uppercase', 'none'],
	},
	'Muli': {
		weights: [3, 4, '3-i', '4-i'],
		transforms: ['uppercase', 'none'],
	},
	'Open Sans': {
		weights: [3, 4, 6, 7, 9, '3-i', '4-i', '6-i', '7-i', '9-i'],
		transforms: ['uppercase', 'none'],
	},
	'Open Sans Condensed': {
		weights: [3, 7, '3-i'],
		transforms: ['uppercase', 'none'],
	},
	'Oswald': {
		weights: [3, 4, 7],
		transforms: ['uppercase', 'none'],
	},
	'Playfair Display': {
		weights: [4, 7, 9, '4-i', '7-i', '9-i'],
		transforms: ['uppercase', 'none'],
	},
	'Quicksand': {
		weights: [3, 4, 7],
		transforms: ['uppercase', 'none'],
	},
	'Raleway': {
		weights: [1, 2, 3, 4, 5, 6, 7, 9],
		transforms: ['uppercase', 'none'],
	},
	'Roboto': {
		weights: [1, 3, 4, 5, 7, 9, '1-i', '3-i', '4-i', '5-i', '7-i', '9-i'],
		transforms: ['uppercase', 'none'],
	},
	'Roboto Slab': {
		weights: [1, 3, 4, 7],
		transforms: ['uppercase', 'none'],
	},
	'Sacramento': {
		weights: [4],
		transforms: ['none'],
	},
	'Work Sans': {
		weights: [1, 2, 3, 4, 5, 6, 7, 9],
		transforms: ['uppercase', 'none'],
	},
}