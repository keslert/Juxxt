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
	filter(allHeadings, filter(allHeadings, heading => includes(headings[heading], name)))
)))
export const fontWeights = {
	'Alice': [400],
	'Amatic SC': [400, 700],
	'Bitter': [400, 700, '400-italic'],
	'Josefin Sans': [100, 300, 400, 600, 700, '100-italic', '300-italic', '400-italic', '600-italic', '700-italic'],
	'La Belle Aurore': [400],
	'Lato':[100, 300, 400, 700, 900, '100-italic', '300-italic', '400-italic', '700-italic', '900-italic'],
	'Meddon': [400],
	'Merriweather': [300, 400, 700, 900, '300-italic', '400-italic', '700-italic', '900-italic'],
	'Montserrat': [400, 700],
	'Muli': [300, 400, '300-italic', '400-italic'],
	'Open Sans': [300, 400, 600, 700, 900, '300-italic', '400-italic', '600-italic', '700-italic', '900-italic'],
	'Open Sans Condensed': [300, 700, '300-italic'],
	'Oswald': [300, 400, 700],
	'Playfair Display': [400, 700, 900, '400-italic', '700-italic', '900-italic'],
	'Quicksand': [300, 400, 700],
	'Raleway': [100, 200, 300, 400, 500, 600, 700, 900],
	'Roboto': [100, 300, 400, 500, 700, 900, '100-italic', '300-italic', '400-italic', '500-italic', '700-italic', '900-italic'],
	'Roboto Slab': [100, 300, 400, 700],
	'Sacramento': [400],
	'Work Sans': [100, 200, 300, 400, 500, 600, 700, 900],
}