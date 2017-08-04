import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#8fc4b7', '#ceede5','#fcebe5'];
const colorBlueprint = buildPageColorBlueprint(palette);
const headerImages = [
    {url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/523220/pexels-photo-523220.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/500447/pexels-photo-500447.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  ];
  const images = [
    {url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/523220/pexels-photo-523220.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/500447/pexels-photo-500447.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  ];
  const backgroundImages = [
    {url:'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/53153/full-moon-moon-night-sky-53153.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},

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
      {name: 'Basic',
        _defaults: {
          style: {
            paddingBottom: 4,
            paddingTop: 7,
            fontFamily: 'Montserrat',
            fontSize: 4,
          },
          color: {
            backgroundImage: backgroundImages[6].url,
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
        groups: {
          tp: {
            name: 'HeadingParagraph',
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
          align: "left",
        },
      },
      {name: 'BasicWide1_2',
        _defaults: {
          groups: {
            tp: {
              name: 'IconHeadingParagraph',
            },
            elements: {
              image: {
                coverImage: images[3].url,   
              },
            },
          },
        },
      },
    ]
  }
}      


/*import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#8fc4b7', '#ceede5','#fcebe5'];
const colorBlueprint = buildPageColorBlueprint(palette);

const headerImages: [
    {url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/523220/pexels-photo-523220.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/500447/pexels-photo-500447.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
];
const images: [
    {url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/523220/pexels-photo-523220.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/500447/pexels-photo-500447.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},

];
const backgroundImages: [
    {url:'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
];*/