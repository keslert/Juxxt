import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#233B4B', '#4B7176','#B26E3E'];
const colorBlueprint = buildPageColorBlueprint(palette);
const headerImages = [
    {url:'https://images.pexels.com/photos/499607/pexels-photo-499607.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/432832/pexels-photo-432832.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/492966/pexels-photo-492966.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/164226/pexels-photo-164226.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/290101/pexels-photo-290101.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/481237/pexels-photo-481237.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  ];
  const images = [
    {url:'https://images.pexels.com/photos/499607/pexels-photo-499607.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/432832/pexels-photo-432832.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/492966/pexels-photo-492966.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/164226/pexels-photo-164226.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/290101/pexels-photo-290101.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/481237/pexels-photo-481237.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/297642/pexels-photo-297642.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://static.pexels.com/photos/504499/pexels-photo-504499.jpeg'},
    {url:'https://images.pexels.com/photos/475355/pexels-photo-475355.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/471239/pexels-photo-471239.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://static.pexels.com/photos/508095/pexels-photo-508095.jpeg'},
    {url:'https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/262503/pexels-photo-262503.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://static.pexels.com/photos/508095/pexels-photo-508095.jpeg'},
    {url:'https://images.pexels.com/photos/2224/road-people-street-smartphone.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/248820/pexels-photo-248820.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
/*    {url:''},
*/
 ];
  const backgroundImages = [
    {url:'https://images.pexels.com/photos/432832/pexels-photo-432832.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/492966/pexels-photo-492966.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url:'https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
 ];
export default {
  palette,
  backgroundImages,
  images,
  headerImages,
  colorBlueprint,
  page: {
    sections: [
      {name: 'Navbar2',
        style: {
        },
      },
      {name: 'Basic',
        style: {
          height: 10,
          fontFamily: 'Montserrat',
          fontSize: 4,
        },
        color: {
          backgroundImage: backgroundImages[0].url,
          background: palette[0],
        }
      },
      {name: 'Basic',
        groups: {
          item:{
            name: 'Gallery',
          }
        },
      },
      {name: 'BasicWide1_2',
        groups: {
          tp: {
            name: 'HeadingParagraph',
          },
        },
        layout: {
          order: 1,
          align: "left"
        }
      },
      {
        name: 'Basic1_2',
        groups: {
          tp: {
            name: 'HeadingParagraph',
          },
          media: {
            name: 'BlockImage',
          },
        },
        layout: {
          order: 3,
        }
      },
      {name: 'Footer1',
      },
    ]
  }
}      