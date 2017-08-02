import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#8fc4b7', '#ceede5','#fcebe5'];
const colorBlueprint = buildPageColorBlueprint(palette);

const headerImages = [
    {key: uniqueId(), url: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'} 
  ];
  const images = [
    {key: uniqueId(), url: 'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/474343/pexels-photo-474343.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/241558/pexels-photo-241558.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/192774/pexels-photo-192774.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/93488/pexels-photo-93488.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/475078/pexels-photo-475078.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/349494/pexels-photo-349494.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/52574/pexels-photo-52574.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/483690/pexels-photo-483690.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/474090/pexels-photo-474090.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
    {key: uniqueId(), url: 'https://images.pexels.com/photos/487442/pexels-photo-487442.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/464584/sunglasses-optics-eyewear-glasses-464584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/485798/pexels-photo-485798.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/503087/pexels-photo-503087.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/487767/pexels-photo-487767.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
  ];
  const backgroundImages = [
    {key: uniqueId(), url: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/487767/pexels-photo-487767.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
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
            background: "#transparent",
          },
        }
      },
      {name: 'Basic',
        _defaults: {
          style: {
            paddingBottom: 4,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 4,
          },
          color: {
            backgroundImage: backgroundImages[2].key,
            _backgroundImage: backgroundImages[2].url,
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
              content: images[3],
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
      {name: 'StackedGrid',
        groups: {
          tp: {
            _default: {
              name: 'HeadingSubheading',
            },
          },
          // gridItem: {
          //   _default: {
          //     name: 'HeadingParagraph', clones:6,  elements:{heading:{name:'SmallHeading'}},
          //   },
          // }
        },
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
      },
      {name: 'Navbar1'},
      {name: 'Basic'},
      {name: 'StackedGrid'},
    ]
  }
}