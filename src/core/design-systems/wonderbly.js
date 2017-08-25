export default {
  spacing = {
    inset: [0,5,10,15,20,30,40,60,80]
  },
  typography: {
    root: '112.5%',
    lineHeight: 1.44444, // Rather than adhering to an arbitrary vertical grid for rhythm, we use relative line height for each of our fonts sizes. The formula used to work it out is lineHeight + 8. So for example, at the base size of 16px, the line height would equate to 24px.
    sizes: {
      sm: [14,16,16,18,20,24,30,36],
      md: [14,16,18,20,24,30,36,48],
    },
    primaryFontFamily: 'Boing by A2-Type',
    weights: ['Blonde', 'Regular', 'Medium'], // [3,4,5]
    textTransform: ['lowercase', 'uppercase', 'capitalize'],
  },
  shadows: [
    '0 1px 3px rgba(58,77,95,.2)',
  ],
  color: {
    stone: {
      lightStone: '#F5F5F0',
      stone: '#D8D4C7',
      darkStone: '#ACA99D',
    },
    gray: {
      almostLight: '#F2F4F5',
      lightGray: '#B5BCC3',
      mediumGray: '#6B7A87',
      gray: '#5A6E73',
      darkGray: '#3a4d5f',
      almostBlack: '#092137',
      // We have a selection of grey colours that are used exclusively within our digital products. We want to make sure the page doesn't ever feel too heavy, or too dark. Therefore, our lighter grey colours are used for large background areas, borders and shadows. The darker grey colours are reserved for clarity and usability in elements such as typography and iconography.
    }
  }
}