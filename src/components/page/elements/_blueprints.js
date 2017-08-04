import { range } from 'lodash';

/** Headings */
export const BasicKicker = { 
  name: 'BasicKicker', 
  is: 'Text',
  inherits: ['Heading'],
  color: { text: 'whiteOrReadable' },
  component: { section: ['section'] },
  style: {
    fontSize: { _default: 3, options: [1,2,3] },
    marginBottom: { _default: 2, options: [0,1,2,3] },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
};
export const SmallHeading = {
  name: 'SmallHeading', 
  is: 'Text',
  inherits: ['Heading'],
  color: { text: 'vibrant' },
  component: { section: ['section'] },
  style: {
    fontSize: { _default: 3, options: [3,4,5] },
    fontWeight: { _default: 6, options: [2,4,6,8] },
    lineHeight: { _default: 1, options: [1,2,3,4] },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  }
};

export const BasicHeading = { 
  name: 'BasicHeading', 
  is: 'Text',
  inherits: ['Heading'],
  color: { text: 'whiteOrVibrant' },
  component: { section: ['section'] },
  style: {
    fontSize: { _default: 5, options: [3,4,5,6,7,8,9] },
    fontWeight: { _default: 6, options: [2,4,6,8] },
    lineHeight: { _default: 1, options: [0,1,2,3,4] },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  }
};

export const BasicSubheading = { 
  name: 'BasicSubheading', 
  is: 'Text',
  inherits: ['Heading'],
  color: { text: 'whiteOrReadable' },
  component: { section: ['section'] },
  style: {
    fontSize: { _default: 4, options: [2,3,4,5,6,7] },
    textTransform: { _defaults: 'none', options: ['none', 'uppercase'] },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
};

export const Copyright = { 
  name: 'Copyright', 
  is: 'Text',
  inherits: [],
  color: { text: 'whiteOrReadable' },
  component: { section: ['section'] },
  style: {
    fontSize: { _default: 3, options: [2,3,4] },
    textTransform: { _defaults: 'none', options: ['none', 'uppercase'] },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  },
};

export const ListTitle = { 
  name: 'ListTitle', 
  is: 'Text',
  inherits: ['Heading'],
  color: { text: 'whiteOrReadable' },
  component: { section: ['section'] },
  style: {
    fontSize: { _default: 4, options: [2,3,4,5,6,7] },
    textTransform: { _defaults: 'none', options: ['none', 'uppercase'] },
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
    fontWeight: { _default: 6, options: [4,6,8] },
    marginBottom: { _default: 2, options: [0,1,2,3] }
  },
};



/** Text */
export const BasicParagraph = { 
  name: 'BasicParagraph', 
  is: 'Text',
  inherits: ['Paragraph'],
  color: { text: 'whiteOrReadable' },
  
  component: { section: ['section'] },
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
  }
};

/** Images */
export const BasicImage = { 
  name: 'BasicImage', 
  is: 'Image',
  inherits: ['AspectMedia', 'Cropped', 'BorderRadius'],
  color: {},
  component: { section: ['section'] },
  style: {
    marginBottom: { _default: 2, options: [0,1,2,3,4,5] },
    aspectRatio: {
      _default: '3x4',
      options: ['auto', '1x1', '16x9', '4x3', '3x4', '6x4', '8x5', '7x5'],
    },
    BorderRadius: {
      _default: 'pill',
      options: [0,'pill',1,2,3,4]
    }
  },
  image: { content: ['content'] },
};

export const CoverImage = {
  name: 'CoverImage', 
  is: 'Image',
  inherits: ['Cropped'],
  color: {},
  component: { section: ['section'] },
  style: {
    aspectRatio: {
      _default: "object",
      options:['object']
    }
  },
  image: { content: ['content'] },
};

export const LogoImage = {
  name: 'LogoImage',
  is: 'Image',
  inherits: [],
  color: {},
  component: { section: ['section'] },
  style: {
    height: {
      _default: 35,
      options: ['auto', 35, 40, 50, 60],
    },
    aspectRatio: { _default: 'auto' },
  },
  image: { content: ['content'] },
}

/** Links **/
export const BasicLink = {
  name: 'BasicLink',
  is: 'Link',
  inherits: [],
  color: { text: 'vibrant' },
  component: { section: ['section'] },
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},

  },
};

export const ReadableLink = {
  name: 'ReadableLink',
  is: 'Link',
  inherits: [],
  color: { text: 'whiteOrReadable' },
  
  component: { section: ['section'] },
  style: {
    textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
    margin: {
      _default: '0',
      options: [0,1,2,3,4],
    }
  },
};

export const SmallButton = { 
  name: 'SmallButton', 
  is: 'Button',
  inherits: ['Button'],
  color: { 
    text: 'whiteOrReadable',
    background: 'vibrant',
  },
  component: { section: ['section'] },
  style: {
    paddingVertical: {
      _default: 2,
      options: range(2,5),
    },
    paddingHorizontal: {
      _default: 3,
      options: range(3,6),
    },
    fontSize: { _default: 2, options: range(1, 4) },
  },
};

export const BasicButton = { 
  name: 'BasicButton', 
  is: 'Button',
  inherits: ['Button'],
  color: {
    text: 'whiteOrReadable',
    background: 'vibrant',
  },
  component: { section: ['section'] },
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
  color: { text: 'readable' },
  component: { section: ['section'] },
  style: {},
}

export const BasicIcon = {
  name: 'BasicIcon',
  is: 'Icon',
  inherits: [],
  color: { text: 'vibrant' },
  component: { section: ['section'] },
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
