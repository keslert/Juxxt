import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#8fc4b7', '#ceede5','#fcebe5'];
const colorBlueprint = buildPageColorBlueprint(palette);

const headerImages = [
    {url:'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'} 
  ];
  const images = [
    {url:'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/474343/pexels-photo-474343.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/241558/pexels-photo-241558.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/192774/pexels-photo-192774.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/93488/pexels-photo-93488.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/475078/pexels-photo-475078.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/349494/pexels-photo-349494.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/52574/pexels-photo-52574.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/483690/pexels-photo-483690.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/474090/pexels-photo-474090.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
    {url:'https://images.pexels.com/photos/487442/pexels-photo-487442.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/464584/sunglasses-optics-eyewear-glasses-464584.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/485798/pexels-photo-485798.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/503087/pexels-photo-503087.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/487767/pexels-photo-487767.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
  ];
  const backgroundImages = [
    {url:'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/487767/pexels-photo-487767.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/492134/pexels-photo-492134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
  ];
export default {

palette,
backgroundImages,
images,
headerImages,
colorBlueprint,
page: {
  sections: [
    {name: 'Navbar3',
      color: { 
        background: palette[2],
      },
    },
    {
      name: 'Basic',
      style: {
        height: 12,
        parallax: true,
      },
      color: {
        backgroundImage: backgroundImages[3].url,
        background: colorBlueprint.darkGray,
      },
      groups: {
        item: {
          name: 'HeadingSubheadingButton',
          elements: {
            heading: {
              color: {
                text: '#ffffff',
                _textBackground: colorBlueprint.darkGray,
              },
              style: { fontSize: 6, textTransform: 'uppercase', fontFamily: 'Montserrat', fontWeight: 4 },
            },
            subheading: {
              color: {
                text: '#ffffff',
                _textBackground: colorBlueprint.darkGray,
              },
            },
          } 
        }
      }
    },
    {name: 'Basic',
      style: {
        },  
      groups: {
        item: {
          name: 'HeadingParagraph',
        }
      }
    },
    {name: 'BasicWide1_2',
      color: {
        background: palette[2],
      },
      style: {
        order: 1,
      },
      groups: {
        tp: {
          name: 'HeadingParagraphButton',
        },
      },
      elements: {
        image: {
          content: images[15],
        },
      },
    },
    {
      name: 'Basic',
      color: {
        background: colorBlueprint.lightGray,
      },
      groups: {
        item:{
          name: 'HeadingParagraph',
        }
      }
    },
      {
      name: 'BasicWide1_2',
      style: {
        order: 1,
      },
      color: {
        background: palette[2],
      },
      groups: {
        tp: {
          name: 'IconHeadingParagraph',
          color: {
            background: palette[2],
          },
        },
      },
      elements: {
        image: {
          content: images[5],
        },
      },
    },
    {
      name: 'Basic',
      color: {
        backgroundImage: backgroundImages[2].url,
        background: colorBlueprint.darkGray,
      },
      groups: {
        tp: {
          name: 'HeadingSubheadingButton',
          elements: {
            heading: {
              color: {
                text: '#ffffff',
                _textBackground: colorBlueprint.darkGray,
              },
              style: {
                lineHeight: 3,
              }
            },
            subheading: {
              color: {
                text: '#ffffff',
                _textBackground: colorBlueprint.darkGray,
              },
            },
          },
        }
      }
    },
    {
      name: 'Basic',
      color: {
        background: palette[1],
      },
      groups: {
        item: {
          name: 'Cards'
        }
      }
    },
    {
      name: 'Basic',
      groups: {
        item: {
          name: 'Gallery'
        }
      }
    },
    {name: 'Footer1',
        color: {
          background: colorBlueprint.lightGray,
        },
      elements: {
        copyright: {
          name: 'Copyright',
        }
      },
      groups: {
        button: {
            name: 'ButtonList',
        },
        links: {
            name: 'HorizontalList',
        }
      },
    }
  ]
}
}