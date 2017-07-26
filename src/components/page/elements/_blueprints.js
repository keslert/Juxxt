import * as inherits from './_inherits';
import { range } from 'lodash';

/** Headings */
export const BasicKicker = { 
  name: 'BasicKicker', 
  is: 'Text',
  inherits: [inherits.Heading],
  text: { 
    color: 'readable',
    fontSize: { _default: 3, options: [1,2,3,4] },
  },
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
export const SmallHeading = {
  name: 'SmallHeading', 
  is: 'Text',
  inherits: [inherits.Heading],
  text: { 
    color: 'vibrant',
    fontSize: { _default: 3, options: [3,4,5] },
    fontWeight: { _default: 6, options: [2,4,6,8] },
    lineHeight: { _default: 1, options: [1,2,3,4] },
  },
  style: {
    fontSize: {
      _default: 3,
      options: range(3, 4),
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

export const BasicHeading = { 
  name: 'BasicHeading', 
  is: 'Text',
  inherits: [],
  text: {
    color: 'whiteOrVibrant',
    fontSize: { _default: 5, options: [3,4,5,6,7,8,9] },
    fontWeight: { _default: 6, options: [2,4,6,8] },
    lineHeight: { _default: 4, options: [1,2,3,4] },
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
      _default: 4,
      options: range(1, 5),
    }
  }
};

export const BasicSubheading = { 
  name: 'BasicSubheading', 
  is: 'Text',
  inherits: [inherits.Heading],
  text: { 
    color: 'readable',
    fontSize: { _default: 4, options: [2,3,4,5,6,7] },
    textTransform: { _defaults: 'none', options: ['none', 'uppercase'] },
  },
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
  text: { 
    text: 'readable',
    fontSize: { _default: 3, options: [2,3,4] },
    textTransform: { _defaults: 'none', options: ['none', 'uppercase'] },
  },
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
  text: { 
    text: 'readable',
    fontSize: { _default: 4, options: [2,3,4,5,6,7] },
    textTransform: { _defaults: 'none', options: ['none', 'uppercase'] },
  },
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
    marginBottom: {
      _default: 2,
      options: range(0, 4),
    }
  },
};



/** Text */
export const BasicParagraph = { 
  name: 'BasicParagraph', 
  is: 'Text',
  inherits: [inherits.Paragraph],
  text: { color: 'readable' },
  style: {}
};

/** Images */
export const BasicImage = { 
  name: 'BasicImage', 
  is: 'Image',
  inherits: ['Media'],
  color: {},
  style: {},
  image: {
    content: true,
    aspectRatio: {
      _default: '4x3',
      options: ['auto', '1x1', '16x9', '4x3', '3x4', '6x4', '8x5', '7x5'],
    },
    crop: {
      _default: 'center center',
      options: ['left top', 'left center', 'left bottom', 'center top', 'center center', 'center bottom', 'right top', 'right center', 'right bottom']
    },
  },
};

export const GalleryImage = { 
  name: 'BasicImage', 
  is: 'Image',
  inherits: ['Media'],
  color: {},
  style: {
    aspectRatio: {
      _default: '4x3',
      options: ['1x1', '16x9', '4x3', '3x4', '6x4', '8x5', '7x5'],
    },
  },
};


export const CoverImage = { 
  name: 'CoverImage', 
  is: 'Image',
  inherits: [],
  color: {},
  style: {
    aspectRatio: {
      _default: "object",
      options:['object']
    }

  },
};

export const LogoImage = {
  name: 'LogoImage',
  is: 'Image',
  inherits: ['Media'],
  color: {},
  style: {
    height: {
      _default: 35,
      options: ['auto', 35, 40, 50, 60],
    }
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
  text: {
    color: 'vibrant',
  },
  style: {},
};

export const ReadableLink = {
  name: 'ReadableLink',
  is: 'Link',
  inherits: [inherits.Link],
  text: {
    color: 'readable',
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
  color: {},
  background: {
    color: 'vibrant',
  },
  text: {
    color: 'whiteOrReadable',
    fontSize: { _default: 2, options: range(1, 4) },
  },
  style: {
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
  background: {
    color: 'vibrant',
  },
  text: {
    color: 'whiteOrReadable',
    fontSize: { _default: 2, options: range(1, 4) },
  },
  color: {},
  style: {
    paddingVertical: {
      _default: 3,
      options: range(3,4),
    },
    paddingHorizontal: {
      _default: 4,
      options: range(3,6),
    },
    fontSize: {
      _default: 2,
      options: range(2, 3),
    },
    minWidth: {
      _default: 2,
      options: ['auto',1,2,3,4],
    },
  },
};

export const BasicInput = {
  name: 'BasicInput',
  is: 'Input',
  inherits: [],
  text: { color: 'readable' },
  style: {},
}

export const BasicIcon = {
  name: 'BasicIcon',
  is: 'Icon',
  inherits: [],
  text: {
    color: 'vibrant',
    fontSize: { _default: 5, options: [2,3,4,5,6,7,8,9] },
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
