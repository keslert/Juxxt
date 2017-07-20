import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#8fc4b7', '#ceede5','#fcebe5'];
const colorBlueprint = buildPageColorBlueprint(palette);

const headerImages = [
    {key: uniqueId(), src: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'} 
  ];
  const images = [
    {key: uniqueId(), src: 'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/474343/pexels-photo-474343.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/241558/pexels-photo-241558.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/192774/pexels-photo-192774.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/93488/pexels-photo-93488.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/475078/pexels-photo-475078.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/349494/pexels-photo-349494.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/52574/pexels-photo-52574.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/483690/pexels-photo-483690.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/474090/pexels-photo-474090.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
    {key: uniqueId(), src: 'https://images.pexels.com/photos/487442/pexels-photo-487442.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/464584/sunglasses-optics-eyewear-glasses-464584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/485798/pexels-photo-485798.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/503087/pexels-photo-503087.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/487767/pexels-photo-487767.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
  ];
  const backgroundImages = [
    {key: uniqueId(), src: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/487767/pexels-photo-487767.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), src: 'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
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
            background: colorBlueprint.lightGray,
          },
        }
      },
      {name: 'Header',
        _defaults: {
          style: {
            paddingBottom: 4,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 4,
          },
          color: {
            backgroundImage: backgroundImages[2].key,
            _backgroundImage: backgroundImages[2].src,
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
                      fontSize: 8,
                      lineHeight: 2,
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
                            background: "transparent",
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
          variants: {
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
                align: 'left'
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
        variant: {
          order: 1,
        },
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
                align: 'right'
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
        variant: {
          order: 3,
        },
      },
    ]
  }
}      


// Default Section styles
//   name: 'Navbar1',
//     _defaults: {
//       style: {
//         paddingTop: 2,
//         paddingBottom: 2,
//       },
//       color: { background: page.colorBlueprint.backgrounds[i] }
//     }

//   name: 'Header',
//   _defaults: {
//     color: {
//       background: page.colorBlueprint.backgrounds[i],
//       backgroundImage: defaultTheme.backgroundImages[1].key,
//       _backgroundImage: defaultTheme.backgroundImages[1].src,
//     },
//     style: {
//       paddingTop: 7,
//       paddingBottom: 6,
//     },
//   },
//   groups: {
//     tp: {
//       _default: {
//         name: 'HeadingSubheadingButton',
//         elements: {
//           heading: {
//             _defaults: {
//               color: { text: '#ffffff', _textBackground: page.colorBlueprint.backgrounds[i], background: '#ffffff', _parentBackground:  },
//               content: { text: 'Buy Now' }
//             },
//           }
//         },
//       },
//       variants: [{
//         align: {
//           _default: 'left',
//           options: ['left', 'right'],
//         }
//       }],
//     }
//   }
// }