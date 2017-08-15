import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#bc1515'];
const colorBlueprint = buildPageColorBlueprint(palette);
const backgroundImages = [  
  {url:'https://static.wixstatic.com/media/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_2882,h_1596,al_c,q_90,usm_0.66_1.00_0.01/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.webp'},
  {url:'https://static.wixstatic.com/media/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png/v1/fill/w_1901,h_1053,al_t/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png'},
];
const images = [
  {url:'https://static.wixstatic.com/media/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.jpg/v1/fill/w_1442,h_1680,al_c,q_90,usm_0.66_1.00_0.01/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.webp'},
  {url:'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
];

export default {
  name: 'Landay',
  preview: '/images/themes/landay.jpg',
  palette,
  backgroundImages,
  images,
  typography: {
    kicker: { fontFamily: 'Anton' }, 
    heading: { fontFamily: 'Anton' }, 
  },
  page: {
    sections: [
      {
        name: 'Navbar4',
        elements: {
          logo: {
            content: {url:'/images/landay.png'}
          }
        },
        color: { background: colorBlueprint.darkGray },
        style: { constrained: 'page', height: 8 },
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
              },
              heading: {
                name: 'LargeHeading',
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
          background: colorBlueprint.darkGray,
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
                  _textBackground: colorBlueprint.darkGray,
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
                    color: { 
                      text: '#ffffff',
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
          background: colorBlueprint.darkGray,
        },
        groups: {
          item: {
            name: 'Heading',
            elements: {
              heading: {
                content: {text: 'Teaching'},
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
        color: { background: colorBlueprint.primary },
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
                      text: '#ffffff',
                      _textBackground: colorBlueprint.primary,
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
            style: {textAlign: 'center'},
            elements: {
              heading: {
                name: 'SmallHeading',
                content: { text: 'landay@stanford.edu' },
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