import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#EAF4F6','#A3CFD7','#0B3259'];
const colorBlueprint = buildPageColorBlueprint(palette);

const backgroundImages = [
  {url:'https://images.pexels.com/photos/487812/pexels-photo-487812.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/317383/pexels-photo-317383.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:''},
  {url:''},
  {url:''},
];
const images = [
  {url:'https://images.pexels.com/photos/520772/pexels-photo-520772.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/493091/pexels-photo-493091.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/516961/pexels-photo-516961.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/355988/pexels-photo-355988.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/85886/lamp-finger-touch-hand-85886.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/85886/lamp-finger-touch-hand-85886.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/473822/pexels-photo-473822.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/513271/pexels-photo-513271.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/288530/pexels-photo-288530.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
//   {url:''},
//   {url:''}
];
const headerImages = [
  {url:'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/499761/pexels-photo-499761.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/471327/pexels-photo-471327.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
];

export default {
  
  palette,
  backgroundImages,
  images,
  headerImages,
  colorBlueprint,
page: {
    sections: [
      {name: 'Navbar1'
      },
      {name: 'Basic',
        _defaults: {
          style: {
            paddingBottom: 5,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 4,
            parallax: 'on',
          },
          color: {
            backgroundImage: backgroundImages[1].url,
            background: palette[0],
          }
        },
        groups: {
          tp: {
            _default: {
              name: 'HeadingSubheadingButton',
              elements: {
                heading: {
                  _defaults: {
                    color: {
                      text: '#ffffff',
                      _textBackground: palette[0],
                    },
                    style: {
                      fontSize: 6,
                      lineHeight: 3,
                    }
                  }
                },
                subheading: {
                  _defaults: {
                    color: {
                      text: '#ffffff',
                      _textBackground: palette[0],
                    },
                  }
                },
              },
              groups: {
                buttonList : {
                  _default: {
                    name: 'ButtonList',
                    elements: {
                      buttons: {
                        _defaults: {
                          color: {
                            background: "#transparent",
                            text: '#ffffff',
                          }
                        }
                      }
                    }
                  }
                }
              }
            } 
          }
        }
      },
    {name: 'Basic',
        groups: {
          item: {
            _default: {
              name: 'KickerHeadingParagraph',
              position: {
                  vertical: 'middle', 
                  horizontal: 'center'
                },
              layout: { align: 'center' },
              elements: {
                kicker: {
                    _defaults: {
                        content: {text: "Mark Twain"}
                    }
                },
                heading: {
                  _defaults: {
                    content: {text: 'THE SECRET OF GETTING AHEAD IS GETTING STARTED'},
                    style: {fontSize: 5},
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: "" }
                  }
                }
              }
            }
          }
        },
    },
    {name: 'Basic',
        _defaults: {
          color: {
            background: palette[0],
          }
        },
        groups: {
          item: {
            _default: {
              name: 'HeadingParagraphButton',
              position: {
                  vertical: 'middle', 
                  horizontal: 'center'
                },
              layout: { align: 'left' },
              elements: {
                heading: {
                  _defaults: {
                    color: {
                        text: palette[2],
                    },
                    content: {text: 'OUR BUSINESS'},
                    style: {fontSize: 5},
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: "We strive to enhance our users’ every day experiences with our innovative and insightful technology. Founded in 2000, our incredible team of engineers, programmers, designers, and marketing experts have worked tirelessly to bring Monocle to the forefront of the IT Startup world.We strive to provide excellence to all of our users; Monocle researches their habits, their motives, and what they really want in a product. We then internalize and synthesize all of this information to improve upon our own business and product. We have, and will continue to work relentlessly to become the technological standard, providing big picture insights which industry leaders not only approve of, but depend on as well." }
                  }
                },
              },
              groups: {
                buttonList : {
                  _default: {
                    name: 'ButtonList',
                    elements: {
                      buttons: {
                        _default: {
                          color: {
                            background: palette[2],
                            text: '#ffffff',
                          }
                        }
                      }
                    }
                  }
                }
              }
            } 
          }
        },
    },
    {name: 'Basic',
        _defaults: {
            color: {
                background: palette[0],
            }
        },
        groups: {
          item: {
            _default: 'Gallery'
          }
        }
      },
      {name: 'Basic',
        _defaults: {
          color: {
            background: palette[1],
          }
        },
        groups: {
          item: {
            _default: {
              name: 'HeadingParagraphButton',
              position: {
                  vertical: 'middle', 
                  horizontal: 'center'
                },
              height: {
                _default: 100,
              },
              layout: { 
                    align: 'center' ,
                },
              elements: {
                heading: {
                  _defaults: {
                    color: {
                        text: palette[2],
                    },
                    content: {text: 'Unparalleled Technology'},
                    style: {fontSize: 5},
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: "Technology is at the core of all that we do at Monocle. We are the entrepreneurs of tomorrow, and our main goal is finding smart ways of using technology that will help build a better tomorrow for everyone. Click below to learn more about the technology behind our IT Startup." }
                  }
                },
              },
              groups: {
                buttonList : {
                  _default: {
                    name: 'ButtonList',
                    elements: {
                      buttons: {
                        _defaults: {
                          color: {
                            background: palette[2],
                            text: '#ffffff',
                          }
                        }
                      }
                    }
                  }
                }
              }
            } 
          }
        },
    },
      {name: 'BasicWide1_2',
        _defaults: {
          color: {
            background: palette[0],
          },
        },
        groups: {
          tp: {
            _default: {
              name: 'HeadingParagraphButton',
              style: {
                _default: {
                  align: 'right'
                }
              },
              color: {
                background: palette[2],
              }
            }
          },
        },
        elements: {
          image: {
            _defaults : {
              content: images[15],
            }   
          },
        },
        layout: {
          order: 1,
        },
      },
      {name: 'Basic',
        _default: {
          color: {
            background: colorBlueprint.lightGray,
          }
        },
        groups: {
          item:{
            _default: { name: 'HeadingParagraph' },
          }
        }
      },
      {name: 'BasicWide1_2',
        _defaults: {
          layouts: {
            order: 1,
          },
          color: {
            background: palette[2],
          },
        },
        groups: {
          tp: {
            _default: {
              name: 'IconHeadingParagraph',
              style: {
                _default: {
                  align: 'left'
                }
              },
              color: {
                background: palette[2],
              },
            },
          },
        },
        elements: {
          image: {
            _defaults : {
              content: images[7],
            }   
          },
        },
        layout: {
          order: 1,
        },
      },
      {name: 'Basic',
        _defaults: {
          style: {
            paddingBottom: 5,
            paddingTop: 6,
            fontFamily: 'Montserrat',
            fontSize: 3,
            parallax: 'on',
          },
          color: {
            backgroundImage: backgroundImages[0].url,
            background: palette[0],
          }
        },
        groups: {
          tp: {
            _default: {
              name: 'HeadingSubheadingButton',
              elements: {
                heading: {
                  _defaults: {
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
                subheading: {
                  _defaults: {
                    color: {
                      text: '#ffffff',
                      _textBackground: palette[0],
                    },
                  }
                },
              },
            } 
          }
        }
      },
      {name: 'Footer1',
        _defaults: {
          color: {
            background: colorBlueprint.lightGray,
          }
        },
        elements: {
          copyright: {
            _default: {
              name: 'Copyright',
            }
          }
        },
        groups: {
          button: {
            _default: {
              name: 'ButtonList',
            }
          },
          links: {
            _default: {
              name: 'HorizontalList',
            }
          }
        },
      }
    ]
  }
}
