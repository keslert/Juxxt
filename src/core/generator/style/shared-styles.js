
const sections = {
  Section: {
    edgePadding: {
      _default: 4,
      options: [0,1,2,3,4,5,6],
    },
    height: {
      _default: 4,
      options: [0,12, 2,4,6,8,10],
    }
  },
  FixedSection: {
    fixed: {
      _default: true,
      options: [true, false],
    }
  },
  NavigationSection: {
    constrained: {
      _default: 'page',
      options: ['none', 'page'],
    },
    margin: { _default: 'auto' },
  },
  BackgroundImageSection: {
    crop: {
      _default: 50,
      options: [10,100,20,30,40,50,60,70,80,90],
      hide: section => !section.color.backgroundImage,
    },
    filter: {
      _default: 'none',
      options: ['none', '1973'],
      hide: section => !section.color.backgroundImage,
    },
    parallax: {
      _default: false,
      options: [true, false],
      hide: section => !section.color.backgroundImage,
    }
  },
  ConstrainedSection: {
    constrained: { _default: 'page', options: ['none', 'page'] },
    margin: { _default: 'auto' },
  },
  SplitRatioSection: {
    splitRatio: { _default: 50, options: [33.3, 50, 66.6] }
  }
}

const groups = {
  BaseGroup: {
    padding: {
      _default: 0,
      options: [0,7,1,2,3,4,5,6],
    },
    textAlign: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  },
  ListGutter: {
    gutter: {
      _default: 2,
      options: [0,3,1,2],
    }
  },
  RowBuffer: {
    buffer: {
      _default: 3,
      options: [0,4,1,2,3],
    },
  },
  Carded: {
    padding: {
      _default: 4,
      options: [0,5,4,3,2,1],
    },
    borderRadius: {
      _default: 3,
      options: [0,1,2,3,4],
    },
    dropShadow: {
      _default: 'medium',
      options: ['none', 'small', 'medium', 'large'],
    }
  }
}

const elements = {
  Heading: {
    textTransform: {
      options: ['none', 'uppercase']
    },
    fontWeight: {
      options: [2,4,6,8],
    },
    marginBottom: {
      _default: 4,
      options: [0,6,1,2,3,4,5],
    },
    fontFamily: {
      _default: 'Source Sans Pro',
      options: ['Bitter', 'Fira Sans', 'Libre Franklin', 'Merriweather', 'Playfair Display', 'PT Serif', 'Roboto', 'Rubik', 'Source Sans Pro'],
    }
  },
  Paragraph: {
    marginBottom: {
      _default: 4,
      options: [0,6,1,2,3,4,5],
    },
    lineHeight: {
      _default: 3,
      options: [1,4,2,3],
    }
  },

  Button: {
    minWidth: {
      _default: 1,
      options: ['auto',1,2,3,4,'100P'],
    },
    shape: {
      _default: 2,
      options: [0,1,3,'-pill'],
      consistent: true,
    },
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
      consistent: true,
    },
    fontWeight: {
      _default: 4,
      options: [4,6],
      consistent: true,
    },
    buttonType: {
      _default: 'highlight',

      options: ['highlight', 'raised', 'bounce'],
      consistent: true,
      hide: item => item.color.borderColor === '#transparent',
    },
    icon: {
      default: 'none',
      options: ['none', 'left', 'right'],
    }
  },
  BorderRadius: {
    borderRadius: {
      _default: 0,
      options: [0,1,2,3,4,'-100','-pill'],
    },
  },
  Cropped: {
    crop: {
      _default: 50,
      options: [0,100,10,20,30,40,50,60,70,80,90],
    },
  },
  AspectMedia: {
    aspectRatio: {
      _default: '16x9',
      options: ['1x1', '16x9', '4x3', '3x4', '6x4', '8x5', '7x5'],
    },
  }
}


export default {
  ...sections,
  ...groups,
  ...elements,
  Guttered: {
    gutter: {
      _default: 3,
      options: [0,5,1,2,3,4],
    }
  },
  Columned: {
    columns: {
      _default: 3,
      options: [1,2,3,4,5,6],
    }
  },
  Ordered: {
    order: {
      options: ['left', 'right'],
    },
  },
  TextAligned: {
    textAlign: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  }
}