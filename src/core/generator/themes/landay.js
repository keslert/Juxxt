import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#bc1515'];
const colorBlueprint = buildPageColorBlueprint(palette);
const backgroundImages = [  
  {key: uniqueId(), src: 'https://static.wixstatic.com/media/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_2882,h_1596,al_c,q_90,usm_0.66_1.00_0.01/e549d4_7d9454e8a4f24493b614498e7821098e~mv2_d_3264_2448_s_4_2.webp'},
  {key: uniqueId(), src: 'https://static.wixstatic.com/media/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png/v1/fill/w_1901,h_1053,al_t/e549d4_b85e34d89bd94dfda7a3c63a6700aa84~mv2_d_1901_1214_s_2.png'},
];
const images = [
  {key: uniqueId(), src: 'https://static.wixstatic.com/media/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.jpg/v1/fill/w_1442,h_1680,al_c,q_90,usm_0.66_1.00_0.01/e549d4_88ac53cb54f14901b841971a01e0c505~mv2_d_4896_3268_s_4_2.webp'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/490025/pexels-photo-490025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/505845/pexels-photo-505845.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
];  
const headerImages = [
  {key: uniqueId(), src: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/481484/woman-smiling-fashion-traffic-signs-481484.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/488449/pexels-photo-488449.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), src: 'https://images.pexels.com/photos/466727/pexels-photo-466727.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'} 
];

export default {
  palette,
  backgroundImages,
  images,
  headerImages,
  page: {
    sections: [
      {
        name: 'Navbar1',
        elements: {
          logo: {
            _defaults: {
              content: {key: uniqueId(), src: '/images/landay.png'}
            }
          }
        },
        _defaults: {
          color: { background: colorBlueprint.darkGray },
          style: { paddingTop: 4, paddingBottom: 4, maxWidth: 1170, margin: 'auto' },
        }
      },
      {
        name: 'BasicWide1_2',
        variant: { order: 3 },
        elements: {
          image: {
            _defaults: {
              content: images[0],
              style: { aspectRatio: '3x4' },
            }
          }
        },
        groups: {
          tp: {
            _default: {
              name: 'KickerHeadingParagraph',
              variant: { align: 'left' },
              elements: {
                kicker: {
                  _defaults: { 
                    content: {text: 'Stanford University Computer Science'},
                    style: { fontSize: 4, fontFamily: 'Anton' },
                  }
                },
                heading: {
                  _defaults: {
                    content: {text: 'James Landay'},
                    style: { fontSize: 9, textTransform: 'uppercase', fontFamily: 'Anton' },
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: 'James Landay is a Professor of Computer Science and the Anand Rajaraman and Venky Harinarayan Professor in the School of Engineering at Stanford University. He specializes in human-computer interaction. He is the founder and co-director of the World Lab, a joint research and educational effort with Tsinghua University in Beijing.'}
                  }
                }
              }
            }
          }
        },
        _defaults: {
          color: { background: colorBlueprint.primary }
        }
      },
      {
        name: 'Basic',
        groups: {
          item: {
            _default: {
              name: 'HeadingParagraph',
              variant: { align: 'left' },
              elements: {
                heading: {
                  _defaults: {
                    content: {text: 'Biography'},
                    style: {fontSize: 8},
                  }
                },
                paragraph: {
                  _defaults: {
                    content: {text: "Previously, Landay was a Professor of Information Science at Cornell Tech in New York City and prior to that he was a Professor of Computer Science & Engineering at the University of Washington. From 2003 through 2006 he was the Laboratory Director of Intel Labs Seattle, a university affiliated research lab that explored the new usage models, applications, and technology for ubiquitous computing. He was also the chief scientist and co-founder of NetRaker, which was acquired by KeyNote Systems in 2004. From 1997 through 2003 he was a professor in EECS at UC Berkeley. Landay received his BS i" }
                  }
                }
              }
            }
          }
        },
        _defaults: {
          color: { background: colorBlueprint.primary }
        }
      },
    ]
  }
}