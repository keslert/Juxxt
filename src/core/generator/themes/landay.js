import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#bc1515'];
const colorBlueprint = buildPageColorBlueprint(palette);
const backgroundImages = [  
  {key: uniqueId(), url: 'https://static.wixstatic.com/media/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_2882,h_1596,al_c,q_90,usm_0.66_1.00_0.01/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.webp'},
  {key: uniqueId(), url: 'https://static.wixstatic.com/media/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png/v1/fill/w_1901,h_1053,al_t/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png'},
];
const images = [
  {key: uniqueId(), url: 'https://static.wixstatic.com/media/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.jpg/v1/fill/w_1442,h_1680,al_c,q_90,usm_0.66_1.00_0.01/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.webp'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
];  
const headerImages = [
  {key: uniqueId(), url: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'} 
];

export default {
  palette,
  backgroundImages,
  images,
  headerImages,
  page: {
    sections: [
      {
        name: 'Navbar1',
        elements: {
          logo: {
            _defaults: {
              content: {key: uniqueId(), url: '/images/landay.png'}
            }
          }
        },
        _defaults: {
          color: { background: colorBlueprint.darkGray },
          style: { paddingTop: 4, paddingBottom: 4, maxWidth: 1170, margin: 'auto' },
        }
      },
      {
        name: 'BasicWide1_2',
        variant: { order: 3 },
        elements: {
          image: {
            _defaults: {
              content: images[0],
              style: { aspectRatio: '3x4' },
            }
          }
        },
        groups: {
          tp: {
            _default: {
              name: 'KickerHeadingParagraph',
              variant: { align: 'left' },
              elements: {
                kicker: {
                  _defaults: { 
                    content: {text: 'Stanford University Computer Science'},
                    style: { fontSize: 4, fontFamily: 'Anton', fontWeight: 4, },
                  }
                },
                heading: {
                  _defaults: {
                    content: {text: 'James Landay'},
                    style: { fontSize: 9, textTransform: 'uppercase', fontFamily: 'Anton', fontWeight: 4 },
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: 'James Landay is a Professor of Computer Science and the Anand Rajaraman and Venky Harinarayan Professor in the School of Engineering at Stanford University. He specializes in human-computer interaction. He is the founder and co-director of the World Lab, a joint research and educational effort with Tsinghua University in Beijing.'}
                  }
                }
              }
            }
          }
        },
        _defaults: {
          color: { background: colorBlueprint.primary }
        }
      },
      {
        name: 'Basic',
        groups: {
          item: {
            _default: {
              name: 'HeadingParagraph',
              variant: { align: 'left' },
              elements: {
                heading: {
                  _defaults: {
                    content: {text: 'Biography'},
                    style: {fontSize: 8},
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: "Previously, Landay was a Professor of Information Science at Cornell Tech in New York City and prior to that he was a Professor of Computer Science & Engineering at the University of Washington. From 2003 through 2006 he was the Laboratory Director of Intel Labs Seattle, a university affiliated research lab that explored the new usage models, applications, and technology for ubiquitous computing. He was also the chief scientist and co-founder of NetRaker, which was acquired by KeyNote Systems in 2004. From 1997 through 2003 he was a professor in EECS at UC Berkeley. Landay received his BS in EECS from UC Berkeley in 1990, and MS and PhD in Computer Science from Carnegie Mellon University in 1993 and 1996, respectively. His PhD dissertation was the first to demonstrate the use of sketching in user interface design tools. He was named to the ACM SIGCHI Academy in 2011 and as an ACM Fellow in 2017. He formerly served on the NSF CISE Advisory Committee." }
                  }
                }
              }
            }
          }
        },
        _defaults: {
          color: { background: colorBlueprint.primary }
        }
      },
      {
        name: 'Header',
        _defaults: {
          style: {
            paddingBottom: 7,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 3,
            parallax: 'on',
          },
          color: {
            backgroundImage: backgroundImages[1].key,
            _backgroundImage: backgroundImages[1].url,
            background: palette[0],
          }
        },
        groups: {
          tp: {
            _default: {
              name: 'Heading',
              elements: {
                heading: {
                  _defaults: {
                    content: {text: 'Projects'},
                    style: {
                      fontSize: 6,
                      align: 'left',
                    },
                    color: {
                      text: '#ffffff',
                      _textBackground: palette[0],
                    },
                  }
                }
              },
            } 
          }
        }
      },
      {name: 'Grid',
        _defaults: {
            color: { 
              background: colorBlueprint.darkGray, 
            }
          },
        groups: {
          gridItem: {
            _default: {
              name: 'IconHeadingParagraph', clones:3,  elements:{heading:{name:'SmallHeading', color: colorBlueprint.lightGray}},
            },
          }
        },
      },
      {name: 'Header',
        _defaults: {
          style: {
            paddingBottom: 7,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 3,
            parallax: 'on',
          },
          color: {
            backgroundImage: backgroundImages[0].key,
            _backgroundImage: backgroundImages[0].url,
            background: palette[0],
          }
        },
        groups: {
          tp: {
            _default: {
              name: 'Heading',
              elements: {
                heading: {
                  _defaults: {
                    content: {text: 'Teaching'},
                    color: {
                      text: '#ffffff',
                      _textBackground: palette[0],
                    },
                    style: {
                      fontSize: 5,
                      lineHeight: 3,
                    }
                  }
                },
              },
            } 
          }
        }
      },
      {name: 'StackedGrid',
        _defaults: {
            color: { 
              background: palette[0], 
            }
          },
        groups: {
          tp: {
            elements: {
            _default: {
              name: 'HeadingSubheading',
              content: '',
            },
          },
          gridItem: {
            _default: {
              name: 'IconHeadingParagraph', clones:2,  elements:{heading:{name:'SmallHeading', color: colorBlueprint.lightGray}},
            },
          }
        },
      },
    },
    
      {name: 'StackedGrid',
        _defaults: {
            color: { 
              background: palette[0], 
            }
          },
        groups: {
          tp: {
            _default: {
              name: 'HeadingSubheading',
                elements: {
                  heading: {
                    _defaults: {
                      content: {text:''},
                    }
                  },
                  subheading: {
                    _defaults: {
                      content: {text:''},
                    }
                  }
                }
            },
          },
          gridItem: {
            _default: {
              name: 'HeadingParagraphButton', clones:2,  elements:{heading:{name:'SmallHeading', color: colorBlueprint.lightGray}},
            },
          }
        },
      },
      // {name: 'Basic', groups: {item: {_default: 'Gallery'}}},
      {
        name: 'Basic',
        _defaults: {
          color: {
            background: colorBlueprint.darkGray,
          },
        },
        groups: {
          item: {
            _default: {
              name: 'HeadingParagraph',
              variant: { align: 'center' },
              elements: {
                heading: {
                  _defaults: {
                    content: {text: 'landay@stanford.edu'},
                    style: {fontSize: 5},
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: "390 Gates Hall, 353 Serra Mall, Stanford CA 94305" }
                  }
                }
              }
            }
          }
        },
      },
    ]
  }
}