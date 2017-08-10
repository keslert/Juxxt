import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#EAF4F6','#A3CFD7','#0B3259'];
const colorBlueprint = buildPageColorBlueprint(palette);

const backgroundImages = [
  { url: '/images/pexel/techStartup/laptopCoffee.jpeg' },
  { url: '/images/pexel/techStartup/keyboardCoffee.jpeg' },
  { url: '/images/pexel/techStartup/laptopGreens.jpeg' },
  { url: '/images/pexel/techStartup/laptopStats.jpeg' },
  { url: '/images/pexel/techStartup/point.jpeg' },
  { url: '/images/pexel/techStartup/startupCode.jpeg' },
  { url: '/images/pexel/techStartup/usingCell.jpeg' },
  { url: '/images/pexel/techStartup/wallE.jpeg' },
  { url: '/images/pexel/techStartup/artsCrafts.jpeg' },


];
const images = [
  { url: '/images/pexel/techStartup/cellMap.png' },
  { url: '/images/pexel/techStartup/laptopCoffee.jpeg' },
  { url: '/images/pexel/techStartup/keyboardCoffee.jpeg' },
  { url: '/images/pexel/techStartup/laptopGreens.jpeg' },
  { url: '/images/pexel/techStartup/laptopStats.jpeg' },
  { url: '/images/pexel/techStartup/point.jpeg' },
  { url: '/images/pexel/techStartup/startupCode.jpeg' },
  { url: '/images/pexel/techStartup/usingCell.jpeg' },
  { url: '/images/pexel/techStartup/wallE.jpeg' },
  { url: '/images/pexel/techStartup/googleMaps.png' },
  { url: '/images/pexel/techStartup/lightBulb.png' },
  { url: '/images/pexel/techStartup/manageHome.jpeg' },
  { url: '/images/pexel/techStartup/workForIt.jpeg' },
  { url: '/images/pexel/techStartup/usingIpad.jpeg' },
  { url: '/images/pexel/techStartup/doMore.jpeg' },
  { url: '/images/pexel/techStartup/artsCrafts.jpeg' },
  { url: '/images/pexel/techStartup/usingAppleWatch.jpeg' },

];
const headerImages = [
  {url:'https://images.pexels.com/photos/503175/pexels-photo-503175.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/499761/pexels-photo-499761.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/471327/pexels-photo-471327.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
];

const peopleImages = [
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/160911/portrait-girl-red-hair-160911.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/371168/pexels-photo-371168.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/60682/pexels-photo-60682.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/33111/author-jewellery-lipstick-eyelashes.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/264486/pexels-photo-264486.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/275496/pexels-photo-275496.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/258641/pexels-photo-258641.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/325682/pexels-photo-325682.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/32976/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'http://graphics.stanford.edu/~maneesh/images/agrawala-macarthur3-head-square.jpg'},
  {key: uniqueId(), url: 'http://hci.stanford.edu/msb/img/msb-hoover2-small.png'},
  {key: uniqueId(), url: 'https://lh3.googleusercontent.com/-amOgRh8TJvQ/AAAAAAAAAAI/AAAAAAAAByI/AK7kUFKHFXU/s640/photo.jpg'},
  {key: uniqueId(), url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/053/34e/0524ee5.jpg'},
];


export default {
  name: 'TechStartup',
  preview: '/images/themes/tech-startup.jpg',
  palette,
  backgroundImages,
  peopleImages,
  images,
  page: {
    sections: [
      {
        name: 'Navbar1',
        elements: {
          logo: {
            content: {url:'http://www.fantasynetwork.com/wp-content/uploads/2016/08/Fantasy-Network-Icons-High-Tech.png'}
          }
        },
        groups: {
          buttonList: {
            name: 'ButtonList',
            style: {
            },
            elements: {
              buttons: {
                clones: [
                  {
                    color: {
                      background: '#transparent',
                      _parentBackground: colorBlueprint.darkGray,
                      text: '#ffffff',
                      _textBackground: colorBlueprint.darkGray,
                      borderColor: '#ffffff',
                    },
                    content: {text: 'Stop'}
                  },
                  {
                    color: {
                      background: colorBlueprint.primary,
                      _parentBackground: colorBlueprint.darkGray,
                      text: '#ffffff',
                      _textBackground: colorBlueprint.darkGray,
                      borderColor: colorBlueprint.primary,
                    },
                    content: {text: 'Play'}
                  }
                ]
              }
            }
          }
        },
        color: { background: colorBlueprint.darkGray },
        style: { constrained: 'page' },
      },
      {
        name: 'BasicWide1_2',
        color: { 
          background: '#ffffff' 
        },
        style: { 
          order: 'left',
          height: 4,
        },
        elements: {
          image: {
            content: images[0],
            style: {
              crop: 10,
            },
          }
        },
        groups: {
          tp: {
            name: 'HeadingParagraphButton',
            elements: {
              heading: {
                name: 'LargeHeading',
                content: {text: 'EDNA'},
                style: { fontSize: 9, textTransform: 'uppercase', fontFamily: 'Anton', fontWeight: 4 },
              },
              paragraph: {
                content: {text: 'James Landay is a Professor of Computer Science and the Anand Rajaraman and Venky Harinarayan Professor in the School of Engineering at Stanford University. He specializes in human-computer interaction. He is the founder and co-director of the World Lab, a joint research and educational effort with Tsinghua University in Beijing.'}
              }
            }
          }
        },
      },
      {
        name: 'Basic',
        style: {
          height: 6,
          textAlign: 'middle',
        },
        color: { background: colorBlueprint.primary },
        groups: {
          item: {
            name: 'HeadingParagraphButton',
            elements: {
              heading: {
                content: {text: 'Discover what all the buzz is about!'},
                style: {fontSize: 6},
              },
              paragraph: {
                content: {text: "Our app is available on any mobile device! Download now to get started!" }
              },
              buttons: {
                clones: [
                  {
                    color: {
                      background: '#transparent',
                      _parentBackground: colorBlueprint.darkGray,
                      text: '#ffffff',
                      _textBackground: colorBlueprint.darkGray,
                      borderColor: '#ffffff',
                    },
                    content: {text: 'Explore'}
                  },
                  {
                    color: {
                      background: colorBlueprint.primary,
                      _parentBackground: colorBlueprint.darkGray,
                      text: '#ffffff',
                      _textBackground: colorBlueprint.darkGray,
                      borderColor: colorBlueprint.primary,
                    },
                    content: {text: 'Download'}
                  }
                ]
              }
            }
          }
        },
      },
      {
        name: 'Basic',
        style: {
          height: 10,
          parallax: true,
        },
        color: {
          backgroundImage: backgroundImages[3].url,
          background: palette[0],
        },
        BackgroundImageSection: {
          parallax: '',
        },
        groups: {
          item: {
            name: 'Heading',
            elements: {
              heading: {
                content: {text: 'Stop waiting. Start building.'},
                style: {
                  fontSize: 7,
                },
                color: {
                  text: '#ffffff',
                  _textBackground: palette[0],
                },
              }
            },
          }
        }
      },
      {
        name: 'Basic',
        color: { background: colorBlueprint.darkGray },
        groups: {
          item: {
            name: 'Cards',
            color: {
              background: '#transparent',
              borderColor: '#transparent',
            },
            style: { dropShadow: 'none' },
            groups: {
              card: {
                name: 'IconHeadingParagraph', 
                style: {
                  iconPosition: 'above',
                  textAlign: 'middle',
                },
                elements: {
                  heading: {
                    name:'SmallHeading', 
                    style: { 
                      fontWeight: 4,
                    },
                    color: { 
                      text: colorBlueprint.lightGray,
                      _textBackground: colorBlueprint.darkGray,
                    },
                  }
                }
              }
            },
          }
        }
      },
      {
        name: 'Basic',
        style: {
          parallax: true,
          height: 12,
          verticalPosition: 1,
          horizontalPosition: 'left',
        },
        color: {
          backgroundImage: backgroundImages[7].url,
          background: palette[0],
        },
        groups: {
          item: {
            name: 'Heading',
            elements: {
              heading: {
                content: {text: 'Create'},
                style: {
                },
                color: {
                  text: '#ffffff',
                  _textBackground: palette[0],
                },
              },
            },
          }
        }
      },
      {name: 'Basic',
        color: { background: colorBlueprint.primary },
        groups: {
          item: {
            name: 'Cards',
            groups: {
              card: {
                name: 'ImageHeadingParagraph', 
                elements: {
                  image: {
                    style: {
                      crop: 50,
                      borderRadius: '-pill',
                      aspectRatio: '1x1',
                    }
                  }
                },
                clones: [
                  {
                    elements: {
                      image: { 
                        content: {url:'https://images.pexels.com/photos/258641/pexels-photo-258641.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'} 
                      }
                    },
                    groups: {
                      tp: {
                        name: 'HeadingParagraph',
                        elements: {
                          heading: {
                            content: {text: 'Name 1'},
                          },
                          paragraph: {
                            content: {text: 'Kesler is a great programmer and a brilliant innovator. I would work with Kesler again in a heart beat and fully expect to read about him in scientific journals and prestigious business magazines.'},
                          },
                        },
                      },
                    },
                  },
                  {
                    elements: {
                      image: { 
                        content: {url:'https://images.pexels.com/photos/301284/pexels-photo-301284.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}  
                      }
                    },
                    groups: {
                      tp: {
                        name: 'HeadingParagraph',
                        elements: {
                          heading: {
                            content: {text: 'Name 2'},
                          },
                          paragraph: {
                            content: {text: 'James Landay is a Professor of Computer Science at Stanford University, specializing in human-computer interaction (HCI). Previously, Dr. Landay was a Professor of Information Science at Cornell Tech in New York City and prior to that a Professor of Computer Science & Engineering at the University of Washington. '},
                          },
                        },
                      },
                    },
                  },
                  {
                    elements: {
                      image: { 
                        content: {url:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}
                      }
                    },
                    groups: {
                      tp: {
                        name: 'HeadingParagraph',
                        elements: {
                          heading: {
                            content: {text: 'Name 3'},
                          },
                          paragraph: {
                            content: {text: 'Maneesh Agrawala is the Forest Baskett Professor of Computer Science and Director of the Brown Institute for Media Innovation at Stanford University. He was previously a Professor of Electrical Engineering and Computer Science at the University of California, Berkeley (2005 - 2015).'},
                          },
                        },
                      },
                    },
                  },
                  
                ]
              }
            }
          }
        }
      },
      {
        name: 'Basic',
        style: {
          height: 4
        },
        color: { background: colorBlueprint.darkGray },
        groups: {
          item: {
            name: 'HeadingParagraph',
            elements: {
              heading: {
                content: { text: 'Edna@stanford.edu' },
                style: { fontSize: 5 },
              },
              paragraph: {
                content: { text: "390 Gates Hall, 353 Serra Mall, Stanford CA 94305" }
              }
            }
          }
        },
      },
    ]
  }
}