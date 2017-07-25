import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';

const backgroundImages = [
  {key: uniqueId(), url: 'https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/106567/pexels-photo-106567.jpeg?h=350&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/238116/pexels-photo-238116.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
]
const images = [
  {key: uniqueId(), url: 'https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?h=350&auto=compress&cs=tinysrgb'},
  {key: uniqueId(), url: 'https://images.pexels.com/photos/97260/pexels-photo-97260.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}
]
const headerImages = [
  {key: uniqueId(), url: 'https://images.pexels.com/photos/202737/pexels-photo-202737.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
]
const palette = ['#aaeeaa'];
const colorBlueprint = buildPageColorBlueprint(palette);

const page = {
  sections: [
    {name: 'BasicWide1_2'},
    {name: 'Basic1_2'},
    {name: 'Basic'},
    {name: 'Footer1'},
  ]
}

export default {
  palette,
  backgroundImages,
  images,
  headerImages,
  page,
}