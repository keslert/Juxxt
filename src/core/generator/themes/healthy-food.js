import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#ffeecc','#59a029','#ced1cc'];
const colorBlueprint = buildPageColorBlueprint(palette);

const backgroundImages = [
  {url:'https://images.pexels.com/photos/473646/pexels-photo-473646.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
];
const images = [
  {url:'https://images.pexels.com/photos/473646/pexels-photo-473646.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
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
  {url:'https://images.pexels.com/photos/95004/pexels-photo-95004.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/520207/pexels-photo-520207.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  
];
const headerImages = [
  {url:'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/499761/pexels-photo-499761.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/471327/pexels-photo-471327.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
];

export default {
  name: 'Healthy Food',
  preview: '/images/themes/healthy-food.jpg',
  palette,
  backgroundImages,
  images,
  headerImages,
  colorBlueprint,
  page: {
    sections: [
      {name: 'Navbar3'},
      {
        name: 'Basic',
        style: {
          height: 10,
          parallax: true,
        },
        color: {
          backgroundImage: backgroundImages[2].url,
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
          order: 3,
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
