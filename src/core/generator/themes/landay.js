import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#bc1515'];
const colorBlueprint = buildPageColorBlueprint(palette);
const backgroundImages = [  
  {url:'https://static.wixstatic.com/media/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_2882,h_1596,al_c,q_90,usm_0.66_1.00_0.01/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.webp'},
  {url:'https://static.wixstatic.com/media/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png/v1/fill/w_1901,h_1053,al_t/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png'},
];
const images = [
<<<<<<< Updated upstream
  {url:'https://static.wixstatic.com/media/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.jpg/v1/fill/w_1442,h_1680,al_c,q_90,usm_0.66_1.00_0.01/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.webp'},
  {url:'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
=======
  {key: uniqueId(), url: 'https://static.wixstatic.com/media/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.jpg/v1/fill/w_1442,h_1680,al_c,q_90,usm_0.66_1.00_0.01/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.webp'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  
];
const peopleImages = [
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/160911/portrait-girl-red-hair-160911.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/371168/pexels-photo-371168.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/60682/pexels-photo-60682.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/33111/author-jewellery-lipstick-eyelashes.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/264486/pexels-photo-264486.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/275496/pexels-photo-275496.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/258641/pexels-photo-258641.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: '  https://images.pexels.com/photos/301284/pexels-photo-301284.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: '  https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/325682/pexels-photo-325682.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'https://images.pexels.com/photos/32976/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  // {key: uniqueId(), url: 'http://graphics.stanford.edu/~maneesh/images/agrawala-macarthur3-head-square.jpg'},
  // {key: uniqueId(), url: 'http://hci.stanford.edu/msb/img/msb-hoover2-small.png'},
  // {key: uniqueId(), url: 'https://lh3.googleusercontent.com/-amOgRh8TJvQ/AAAAAAAAAAI/AAAAAAAAByI/AK7kUFKHFXU/s640/photo.jpg'},
  // {key: uniqueId(), url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/053/34e/0524ee5.jpg'},
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
];

export default {
  name: 'Landay',
  preview: '/images/themes/landay.jpg',
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
            content: {url:'/images/landay.png'}
          }
        },
        groups: {
          buttonList: {
            name: 'ButtonList',
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
        // color: { background: '#ffffff' },
        style: { 
          order: 'right',
          height: 8
        },
        elements: {
          image: {
            content: images[0],
          }
        },
        groups: {
          tp: {
            name: 'KickerHeadingParagraph',
            elements: {
              kicker: {
                content: {text: 'Stanford University Computer Science'},
                style: { fontSize: 4, fontFamily: 'Anton', fontWeight: 4, },
              },
              heading: {
                content: {text: 'James Landay'},
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
          height: 8,
        },
        color: { background: colorBlueprint.primary },
        groups: {
          item: {
            name: 'HeadingParagraph',
            elements: {
              heading: {
                content: {text: 'Biography'},
                style: {fontSize: 7},
              },
              paragraph: {
                content: {text: "Previously, Landay was a Professor of Information Science at Cornell Tech in New York City and prior to that he was a Professor of Computer Science & Engineering at the University of Washington. From 2003 through 2006 he was the Laboratory Director of Intel Labs Seattle, a university affiliated research lab that explored the new usage models, applications, and technology for ubiquitous computing. He was also the chief scientist and co-founder of NetRaker, which was acquired by KeyNote Systems in 2004. From 1997 through 2003 he was a professor in EECS at UC Berkeley. Landay received his BS in EECS from UC Berkeley in 1990, and MS and PhD in Computer Science from Carnegie Mellon University in 1993 and 1996, respectively. His PhD dissertation was the first to demonstrate the use of sketching in user interface design tools. He was named to the ACM SIGCHI Academy in 2011 and as an ACM Fellow in 2017. He formerly served on the NSF CISE Advisory Committee." }
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
          backgroundImage: backgroundImages[1].url,
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
                content: {text: 'Projects'},
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
                  textAlign: 'left',
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
          height: 10,
          parallax: true,
        },
        color: {
          backgroundImage: backgroundImages[0].url,
          background: palette[0],
        },
        groups: {
          item: {
            name: 'Heading',
            elements: {
              heading: {
                content: {text: 'Teaching'},
                color: {
                  text: '#ffffff',
                  _textBackground: palette[0],
                },
              },
            },
          }
        }
      },
      {
        name: 'Basic',
        color: { background: palette[0] },
        groups: {
          item: {
            name: 'Cards',
            groups: {
              tp: {
                name: 'HeadingSubheading',
              },
              gridItem: {
                name: 'IconHeadingParagraph',
                elements: {
                  heading: { 
                    name:'SmallHeading', 
                    color: {
                      text: colorBlueprint.lightGray,
                      _textBackground: palette[0],
                    },
                  }
                }
              },
            },
          }
        }
      },
    
      {
        name: 'Basic',
        color: { background: colorBlueprint.darkGray },
        groups: {
          item: {
            name: 'HeadingParagraph',
            elements: {
              heading: {
                content: { text: 'landay@stanford.edu' },
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