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
      _default: 2,
      options: range(0, 4),
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
      options: range(3, 9),
    },
    fontWeight: {
      _default: 6,
      options: [2,4,6,8],
    },
    lineHeight: {
      _default: 1,
      options: range(1, 5),
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
      options: range(3, 6),
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
  inherits: [inherits.Heading],
  color: {},
  style: {
    textTransform: {
      _default: 'uppercase',
      options: ['none', 'uppercase'],
    },
    fontSize: {
      _default: 2,
      options: [2,3,4],
    },
    fontWeight: {
      _default: 6,
      options: [4,6,8],
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

export const CoverImage = { 
  name: 'CoverImage', 
  is: 'Image',
  inherits: [],
  color: {},
  style: {
    aspectRatio: {
      _default: '4x3',
      options: ['1x1', '16x9', '9x16', '4x3', '3x4', '6x4', '4x6', '8x5', '5x8', '7x5', '5x7']
    },
  },
};

export const LogoImage = {
  name: 'LogoImage',
  is: 'Image',
  inherits: ['Media'],
  color: {},
  style: {

  },
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
  style: {},
};

export const ReadableLink = {
  name: 'ReadableLink',
  is: 'Link',
  inherits: [inherits.Link],
  color: {
    text: 'readable',
  },
  style: {
    margin: {
      _default: '0',
      options: [0,1,2,3,4],
    }
  },
};

export const SmallButton = { 
  name: 'SmallButton', 
  is: 'Button',
  inherits: [inherits.Button],
  color: {
    text: 'readable',
    background: 'vibrant',
  },
  style: {
    marginVertical: {
      _default: 2,
      options: range(0, 3),
    },
    paddingVertical: {
      _default: 2,
      options: range(2,5),
    },
    paddingHorizontal: {
      _default: 3,
      options: range(3,6),
    },
    fontSize: {
      _default: 2,
      options: range(2, 3),
    },
  },
};

export const BasicButton = { 
  name: 'BasicButton', 
  is: 'Button',
  inherits: [inherits.Button],
  color: {
    text: 'readable',
    background: 'vibrant',
  },
  style: {
    marginVertical: {
      _default: 2,
      options: range(0, 3),
    },
    paddingVertical: {
      _default: 3,
      options: range(3,5),
    },
    paddingHorizontal: {
      _default: 4,
      options: range(3,6),
    },
    fontSize: {
      _default: 2,
      options: range(2, 3),
    },
  },
};

export const BasicIcon = {
  name: 'BasicIcon',
  is: 'Icon',
  inherits: [],
  color: {
    text: 'vibrant',
  },
  style: {
    fontSize: {
      _default: 5,
      options: range(2, 10),
    },
    marginHorizontal: {
      _default: 3,
      options: range(0, 4),
    }
  },
}
