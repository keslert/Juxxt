
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
    paddingVertical: {
      _default: 3,
      options: [1,2,3,4],
    },
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
    paddingHorizontal: {
      _default: 0,
      options: [0,1,2,3,4,5,6,7],
    },
    textAlign: {
      _default: 'inherit',
      options: ['inherit', 'left', 'center', 'right'],
    }
  },
  ListGutter: {
    gutter: {
      _default: 2,
      options: [0,1,2,3],
    }
  },
  RowBuffer: {
    buffer: {
      _default: 3,
      options: [0,1,2,3,4],
    },
  },
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
      options: [0,1,2,3,4,5,6],
    },
    fontFamily: {
      _default: 'Source Sans Pro',
      options: ['Bitter', 'Fira Sans', 'Libre Franklin', 'Merriweather', 'Playfair Display', 'PT Serif', 'Roboto', 'Rubik', 'Source Sans Pro'],
    }
  },
  Paragraph: {
    marginBottom: {
      _default: 4,
      options: [0,1,2,3,4,5,6],
    },
    lineHeight: {
      _default: 3,
      options: [1,2,3,4],
    }
  },
  Button: {
    minWidth: {
      _default: 1,
      options: ['auto', 1, 2, 3, 4],
    },
    borderRadius: {
      _default: 2,
      options: [0,1,2,3,4,'-pill'],
    },
    borderWidth: {
      _default: 1,
      options: [0,1],
    },
    textTransform: {
      _default: 'none',
      options: ['none', 'uppercase'],
    },
    fontWeight: {
      _default: 4,
      options: [4,6],
    },
  },
  BorderRadius: {
    borderRadius: {
      _default: 0,
      options: [0,1,2,3,4,100,'-pill'],
    },
  },
  Cropped: {
    crop: {
      _default: 50,
      options: [0,10,100,20,30,40,50,60,70,80,90],
    },
  },
  AspectMedia: {
    aspectRatio: {
      _default: '4x3',
      options: ['1x1', '16x9', '4x3', '3x4', '6x4', '8x5', '7x5'],
    },
  },
}


export default {
  ...sections,
  ...groups,
  ...elements,
  Guttered: {
    gutter: {
      _default: 4,
      options: [0,1,2,3,4,5],
    }
  },
  Columned: {
    columns: {
      _default: 3,
      options: [2,3,4,5,6],
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