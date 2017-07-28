import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#0C70C1','#81AACB','#626663'];//button color, input box color, font color
const colorBlueprint = buildPageColorBlueprint(palette);
const headerImages = [
    {key: uniqueId(), url: 'https://images.pexels.com/photos/497869/pexels-photo-497869.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/37828/helocasting-helicopter-water-military-37828.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
/*    {key: uniqueId(), url: ''},
    {key: uniqueId(), url: ''},
    {key: uniqueId(), url: ''},
    {key: uniqueId(), url: ''},
    {key: uniqueId(), url: ''},
    {key: uniqueId(), url: ''},
    {key: uniqueId(), url: ''},*/
  ];
  const images = [
    {key: uniqueId(), url: 'https://ak9.picdn.net/shutterstock/videos/2747627/thumb/1.jpg'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/interested_0.jpg'},//first in set of three
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/priorService_0.jpg'},//2 of 3
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/parents_0.jpg'},//3 of 3
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/eligible_1.jpg'},//A of 3
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/benefits.jpg'},//B of 3
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/join.jpg'},//C of 3
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/officer_candidate_school_0.jpg'},//1 of 8
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/combat_driving_1.jpg'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/Infantry_Assault_0_0.jpeg'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/best_ranger_0.jpg)'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/ng_bt_day_one_vidlinkbg_0.jpg'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/new_combat_medic_0.jpg'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/Howitzer_0.jpeg'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/contentUpload/special_forces_dive_0.jpg'},
/*    {key: uniqueId(), url: 'https://www.nationalguard.com/'},
    {key: uniqueId(), url: 'https://www.nationalguard.com/'},*/
 ];
  const backgroundImages = [
    {key: uniqueId(), url: 'https://images.pexels.com/photos/497869/pexels-photo-497869.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {key: uniqueId(), url: 'https://images.pexels.com/photos/37828/helocasting-helicopter-water-military-37828.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
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
            background: 'black',
          },
        }
      },
<<<<<<< HEAD
      {name: "Header",//'130+ JOBS. ONE MISSION.'//'FIND YOUR DREAM JOB -->'
        variants:{},
=======
      {
        name: "Header",//'130+ JOBS. ONE MISSION.'//'FIND YOUR DREAM JOB -->'
>>>>>>> 4125d8c8f3b40813276cca4828e73daf305b5297
        elements:{},
        groups:{
          tp: {
            _default:{
              name: 'HeadingSubheadingButton',
              elements: {
                heading: {
                  _defaults: {
                    content: {text: '130+ JOBS. ONE MISSION.'},
                    style: { fontSize: '6', textTransform: 'uppercase'/*, fontFamily: 'Anton'*/ },
                  }
                },
                subheading: {
/*                  _defaults: {
                    content: {text: 'FIND YOUR DREAM JOB -->'},
                    //style: { fontSize: 9, textTransform: 'uppercase', fontFamily: 'Anton' },
                  }*/
                },
                /*button:{
                  _defaults: {
                    content: {text: 'FIND YOUR DREAM JOB -->'},
                  }
                }*/
              },
            },
            groups: {
              buttonList: {
                options: ['ButtonList'],
              }
            },
          },
        },
        _defaults: {
          style: {
            paddingBottom: 8,
            paddingTop: 6,
            fontFamily: 'Montserrat',
            fontSize: 4,
          },
          color: {
            backgroundImage: backgroundImages[0].key,
            _backgroundImage: backgroundImages[0].url,
            background: palette[0],
          },
        },
      },
      {name: 'Basic',
        groups: {
          item:{
            _default: { 
              name: 'HeadingParagraph', 
              elements: {
                heading: {
                  _defaults: { 
                    content: {text: 'TAKE A PATH WITH PURPOSE. BE PART OF SOMETHING BIGGER THAN YOURSELF.'},
                    style: { fontSize: 5, /*fontFamily: 'Anton', fontWeight: 4,*/ },
                  },
                  //name: 'heading',
                },
                paragraph: {
                  _defaults: { 
                    content: {text: 'The National Guard is more than just a job. As a Guard Soldier you\'ll respond when disaster strikes at home. You\'ll also answer the call when your country needs you around the world. This is our unique dual mission–serving both community and country. Make it your mission today.'},
                    style: { fontSize: 3, /*fontFamily: 'Anton', fontWeight: 4,*/ },
                  }
                },
              },             
            },
          }
        },
      },
      //heading, image, paragraph
      {name: 'Basic',
        groups: {
          item:{
            _default: { name: 'Gallery' },
          }
        },
        _defaults: {
          color: { 
            //background: '#f7f6f5',
          },
        },
      },
      //three images, each with one button and a heading
      {name: 'BasicWide1_2',
        groups: {
          tp: {
            name: 'HeadingParagraph',
          },
        },
        elements: {
          image: {
            _defaults : {
              content: images[3],
            }   
          },
        },
        layout: {
          order: 1,
          align: "left"
        },
      },
      {name: 'Basic',
        groups: {
          item:{
            _default: { name: 'Heading' 
            //content:"SEE THE ARMY NATIONAL GUARD IN ACTION",
          },
          }
        },
        _defaults: {
          color: { 
            //background: 'white',
          },

        },
      },
      //eight gallery with heading
      {name: 'Basic',
        groups: {
          item:{
            _default: { name: 'Gallery' },
          }
        },
        _defaults: {
          color: { 
            //background: 'white',
          },
        },
      },
      //call to action (3 part input)
      {name: 'CallToAction',
        _default: {
          style: {
            //
          },
        color: { 
            background: palette[0],
          },

        },
      },

      //footer that is smallest 
      {name: 'Footer1',
        _default: {
          style: {
            paddingTop: 2,
            paddingBottom: 2,
          },
        _defaults: {
          color: { 
            //background: '#4B7176',
          },
        },
        }
      },
    ]
  }
}  
     