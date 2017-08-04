import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

<<<<<<< Updated upstream
const page = {
  sections: [
    {
      name: 'Basic',
      groups: {
        tp: {
          name: 'HeadingSubheadingButton',
          elements: {
            heading: {
              style: {
                fontFamily: 'Montserrat'
              },
            },
          }
        }
      },
      style: {
        paddingBottom: 4,
        paddingTop: 6,
        imageFilter: '1957',
      },
      color: {
        backgroundImage: {
          content: {url:'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/5939b06ee3df282dbda0888f/1496952956394/Tori%27s+Bakeshop+Ca'},
        }
      }
    }
  ]
}
=======
const palette = ['#1c919e', '#7fd2d2', '#d2e7ca'];
const colorBlueprint = buildPageColorBlueprint(palette);
>>>>>>> Stashed changes

const backgroundImages = [
  {key: uniqueId(), url: 'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/5939b06ee3df282dbda0888f/1496952956394/Tori%27s+Bakeshop+Ca'},
  {key: uniqueId(), url: 'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
  {key: uniqueId(), url: 'http://www.howsweeteats.com/wp-content/uploads/2014/08/boozy-coconut-hot-fudge-milkshakes-I-howsweeteats.com-2.jpg'},

<<<<<<< Updated upstream
export default {
  palette: ['#ffc4c4', '#7ec6cc', '#fffac6'],
  // palette: ['#def7f2', '#d5e0de','#797c7c'],
  backgroundImages: [
    {url:'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/5939b06ee3df282dbda0888f/1496952956394/Tori%27s+Bakeshop+Ca'}
  ],
  images: [
    {url:'https://s-media-cache-ak0.pinimg.com/736x/8f/dd/3c/8fdd3ccb3a6e4efa9d6750ac2dbdf893--chocolate-layer-cakes-chocolate-coffee.jpg'},
    {url:'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {url:'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {url:'http://www.howsweeteats.com/wp-content/uploads/2014/08/boozy-coconut-hot-fudge-milkshakes-I-howsweeteats.com-2.jpg'},
    {url:'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {url:'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/28/12/enhanced/webdr02/enhanced-1509-1414514224-18.jpg?crop=395:598;57,0&downsize=715:*&output-format=auto&output-quality=auto'}
  ],
  headerImages: [
    {url:'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {url:'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {url:'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {url:'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'}
  ],
  page
}
=======
];
const images = [
  {key: uniqueId(), url: 'https://s-media-cache-ak0.pinimg.com/736x/8f/dd/3c/8fdd3ccb3a6e4efa9d6750ac2dbdf893--chocolate-layer-cakes-chocolate-coffee.jpg'},
  {key: uniqueId(), url: 'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
  {key: uniqueId(), url: 'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
  {key: uniqueId(), url: 'http://www.howsweeteats.com/wp-content/uploads/2014/08/boozy-coconut-hot-fudge-milkshakes-I-howsweeteats.com-2.jpg'},
  {key: uniqueId(), url: 'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
  {key: uniqueId(), url: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/28/12/enhanced/webdr02/enhanced-1509-1414514224-18.jpg?crop=395:598;57,0&downsize=715:*&output-format=auto&output-quality=auto'},
  
];
const headerImages = [
  {key: uniqueId(), url: 'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {key: uniqueId(), url: 'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {key: uniqueId(), url: 'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {key: uniqueId(), url: 'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'}
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
>>>>>>> Stashed changes



export default {
  
  palette,
  backgroundImages,
  peopleImages,
  images,
  headerImages,
  colorBlueprint,
page: {
    sections: [
      {name: 'Navbar1',
        color: {
          background: palette[2],
        },
      },
      {
        name: 'Basic',
        style: {
          height: 10,
          parallax: true,
        },
        color: {
          backgroundImage: backgroundImages[0].key,
          _backgroundImage: backgroundImages[0].url,
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
        color: {
          background: colorBlueprint.lightGray,
        },
        groups: {
          item: {
            name: 'HeadingParagraph',
          }
        }
      },
      {name: 'BasicWide1_2',
        color: {
          background: '#ffffff',
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
          backgroundImage: backgroundImages[2].key,
          _backgroundImage: backgroundImages[2].url,
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
