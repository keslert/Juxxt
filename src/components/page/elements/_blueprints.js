import * as inherits from './_inherits';
import { range } from 'lodash';

/** Headings */
export const BasicKicker = { 
  name: 'BasicKicker', 
  is: 'Text',
  inherits: [inherits.Heading],
  color: {},
  style: {
    fontSize: {
      options: range(1, 3)
    },
    paddingTop: {
      options: range(0, 3),
    },
    paddingBottom: {
      options: range(0, 3),
    }
  },
};

export const BasicHeading = { 
  name: 'BasicHeading', 
  is: 'Text',
  inherits: [inherits.Heading],
  color: {
    text: 'highlight',
  },
  style: {
    fontSize: {
      options: range(3, 6),
    }
  }
};

export const BasicSubheading = { 
  name: 'BasicSubheading', 
  is: 'Text',
  inherits: [inherits.Heading],
  color: {
    text: 'text',
  },
  style: {
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
    },
    fontSize: {
      options: range(3, 5),
    }
  },
  
};

/** Text */
export const BasicParagraph = { 
  name: 'BasicParagraph', 
  is: 'Text',
  inherits: [inherits.Paragraph],
  color: {
    text: 'text'
  },
  style: {}
};

/** Images */
export const BasicImage = { 
  name: 'BasicImage', 
  is: 'Image',
  inherits: ['Media'],
  color: {},
  style: {},
};

export const SmallProfileImage = { 
  name: 'SmallProfileImage', 
  is: 'Image',
  inherits: [inherits.Media],
  color: {},
  styles: {
    aspectRatio: {
      options: ['1x1', '16x9', '9x16', '4x3', '3x4', '6x4', '4x6', '8x5', '5x8', '7x5', '5x7']
    },
    borderRadius: {
      options: [0, 1, 2, '100%']
    },
  }
};

export const BasicButton = { 
  name: 'BasicButton', 
  is: 'Text',
  inherits: [inherits.Button],
  color: {
    background: 'highlight',
  },
  style: {
    fontSize: {
      default: 2,
      options: range(2, 3),
    },
  },
};

/** Links **/
export const BasicLink = {
  name: 'BasicLink',
  is: 'Link',
  inherits: [inherits.Link],
  color: {
    text: 'text-0',
    background: 'highlight',
  },
  style: {
    paddingHorizontal: {
      options: range(1, 3),
    },
    paddingVertical: {
      options: range(1, 2),
    },
    borderRadius: {
      options: range(0, 2),
    }
  }
};

