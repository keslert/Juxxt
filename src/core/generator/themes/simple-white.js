import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const backgroundImages = [
  {url:'https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/106567/pexels-photo-106567.jpeg?h=350&auto=compress&cs=tinysrgb'},
]
const images = [
  {url:'https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?h=350&auto=compress&cs=tinysrgb'},
  {url:'https://images.pexels.com/photos/97260/pexels-photo-97260.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}
]
const headerImages = [
  {url:'https://images.pexels.com/photos/202737/pexels-photo-202737.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
]
const palette = ['#aaeeaa', '#00beef'];
const colorBlueprint = buildPageColorBlueprint(palette);

const page = {
  sections: [
    // {name: 'Navbar1'},
    // {name: 'Navbar2'},
    // {name: 'Navbar3'},
    // {name: 'Basic1_2'},
    // {name: 'BasicWide1_2'},
    // {name: 'Basic'},
    {
      name: 'Basic1_2',
      color: {
        // background: colorBlueprint.darkGray,
      },
      groups: {
        media: {
          name: 'ImacMockup'
        }
      }
    },
    {
      name: 'Basic1_2',
      color: {
        // background: colorBlueprint.darkGray,
      },
      groups: {
        media: {
          name: 'BrowserMockup'
        }
      }
    },
    // {name: 'Footer1'},
    // {name: 'Footer2'},
    // {name: 'FooterVerticalLists'},
  ]
}

export default {
  palette,
  backgroundImages,
  images,
  headerImages,
  page,
}