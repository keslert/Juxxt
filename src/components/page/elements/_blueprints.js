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
      _default: 3,
      options: range(1, 3)
    },
    marginBottom: {
      options: range(0, 2),
    }
  },
};

export const BasicHeading = { 
  name: 'BasicHeading', 
  is: 'Text',
  inherits: [inherits.Heading],
  color: {
    text: 'vibrant',
  },
  style: {
    fontSize: {
      _default: 5,
      options: range(3, 6),
    },
    fontWeight: {
      _default: 6,
      options: [2,4,6,8],
    }
  }
};

export const BasicSubheading = { 
  name: 'BasicSubheading', 
  is: 'Text',
  inherits: [inherits.Heading],
  color: {},
  style: {
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
    },
    fontSize: {
      _default: 4,
      options: range(4, 4),
    }
  },
};

export const Copyright = { 
  name: 'Copyright', 
  is: 'Text',
  inherits: [],
  color: {},
  style: {
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
    },
    fontSize: {
      _default: 3,
      options: range(3, 3),
    }
  },
};

export const ListTitle = { 
  name: 'ListTitle', 
  is: 'Text',
  inherits: [],
  color: {},
  style: {
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
    },
    fontSize: {
      _default: 2,
      options: range(2, 2),
    },
    paddingHorizontal: {
      options: range(3, 4),
    },
    paddingVertical: {
       options: range(2, 3),
     },
  },
};



/** Text */
export const BasicParagraph = { 
  name: 'BasicParagraph', 
  is: 'Text',
  inherits: [inherits.Paragraph],
  color: {},
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

export const LogoImage = {
  name: 'LogoImage',
  is: 'Image',
  inherits: ['Media'],
  color: {},
  style: {},
}

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

/** Links **/
export const BasicLink = {
  name: 'BasicLink',
  is: 'Link',
  inherits: [inherits.Link],
  color: {
    text: 'vibrant',
  },
  style: {
    paddingHorizontal: {
      options: range(3, 4),
    },
    paddingVertical: {
       options: range(2, 3),
     },
    borderRadius: {
      options: range(0, 2),
    }
  }
};

export const BasicButton = { 
  name: 'BasicButton', 
  is: 'Link',
  inherits: [inherits.Button],
  color: {
    text: 'readable',
    background: 'vibrant',
  },
  style: {
    paddingVertical: {
      _default: 3,
      options: range(3,4),
    },
    paddingHorizontal: {
      _default: 4,
      options: range(3,6),
    },
    borderRadius: {
      _default: 2,
      options: range(0, 2),
    },
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
    },
    fontSize: {
      _default: 2,
      options: range(2, 3),
    },
  },
};