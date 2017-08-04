import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#ffeecc','#59a029','#ced1cc'];
const colorBlueprint = buildPageColorBlueprint(palette);

const backgroundImages = [
  {url:'https://static.wixstatic.com/media/84770f_ac1da095982f4c81ae2661e88fef8c61.jpg/v1/fill/w_1920,h_1280,al_b,q_85,usm_0.66_1.00_0.01/84770f_ac1da095982f4c81ae2661e88fef8c61.webp'},
];
const images = [
  {url:'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/106877/pexels-photo-106877.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/503174/pexels-photo-503174.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/499761/pexels-photo-499761.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/247685/pexels-photo-247685.png?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/5506/bread-food-salad-sandwich.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/470460/pexels-photo-470460.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/8844/red-lunch-green-knolling.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/236813/pexels-photo-236813.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/480153/pexels-photo-480153.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/95004/pexels-photo-95004.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/520207/pexels-photo-520207.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/473646/pexels-photo-473646.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
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
      {name: 'Navbar1',
        _default: {
          style: {
            paddingTop: 2,
            paddingBottom: 2,
          },
          color: { 
            background: "colorBlueprint.lightGray",
          },
        }
      },
      {name: 'Basic',
        _defaults: {
          style: {
            paddingBottom: 5,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 4,
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
          item:{
            _default: { name: 'HeadingParagraph' },
          }
        }
      },
      {name: 'BasicWide1_2',
        _defaults: {
          color: {
            background: palette[2],
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
          order: 3,
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
            backgroundImage: backgroundImages[3].url,
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
