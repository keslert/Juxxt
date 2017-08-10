import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const palette = ['#ffeecc','#59a029','#ced1cc'];
const colorBlueprint = buildPageColorBlueprint(palette);

const backgroundImages = [
  {url: '/images/pexel/healthyFood/avacado_banana_breakfast.jpeg'},
  {url: '/images/pexel/healthyFood/bread_veggies.jpeg'},
  {url: '/images/pexel/healthyFood/orange_half.jpeg'},
  {url: '/images/pexel/healthyFood/passion_fruit_tea.jpeg'},
];
const images = [
  {url:'/images/pexel/healthyFood/avacado_banana_breakfast.jpeg'},
  {url:'/images/pexel/healthyFood/passion_fruit_tea.jpeg'},
  {url:'/images/pexel/healthyFood/four_pineapple.jpeg'},
  {url:'/images/pexel/healthyFood/raw_egg_half_avacado.jpeg'},
  {url:'/images/pexel/healthyFood/orange_half.jpeg'},
  {url:'/images/pexel/healthyFood/telephone_avacado.jpeg'},
  {url:'/images/pexel/healthyFood/fork_on_green.jpeg'},
  {url:'/images/pexel/healthyFood/cropped_passion_fruit.png'},
  {url:'/images/pexel/healthyFood/sprout_sandwhich.jpg'},
  {url:'/images/pexel/healthyFood/cute_pastry_lineup.jpeg'},
  {url:'/images/pexel/healthyFood/chicken_broccoli_bell_pepper.jpg'},
  {url:'/images/pexel/healthyFood/avacado_egg_toast.jpeg'},
  {url:'/images/pexel/healthyFood/oatmeal_berries.jpeg'},
  {url:'/images/pexel/healthyFood/salad_in_hands.jpeg'},
  {url:'/images/pexel/healthyFood/avacado_veggies_cutting_board.jpeg'},
];
const headerImages = [
  {url: '/images/pexel/healthyFood/passion_fruit_tea.jpeg'},
  {url: '/images/pexel/healthyFood/fork_on_green.jpeg'},
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
                name: 'LargeHeading',
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
      {
        name: 'Basic',
        style: {},  
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
