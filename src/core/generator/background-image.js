import { randomItem } from '../utils';

export function getBackgroundImage(section, props) {
  return randomItem(options);
}

export function getFilter(section, props) {
  return randomItem(filters);
}

const filters = [
  "_1977",
  "aden",
  "amaro",
  "brannan",
  "brooklyn",
  "clarendon",
  "gingham",
  "hudson",
  "inkwell",
  "kelvin",
  "lark",
  "lofi",
  "mayfair",
  "moon",
  "nashville",
  "perpetua",
  "reyes",
  "rise",
  "slumber",
  "stinson",
  "toaster",
  "valencia",
  "walden",
  "willow",
  "xpro2",
]

const options = [
  {
    focus: 'none',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'none',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/247666/pexels-photo-247666.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'left',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/160146/pexels-photo-160146.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'left',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/578/sea-black-and-white-ocean-boats.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'bottom',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/187334/pexels-photo-187334.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'bottom',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/243145/pexels-photo-243145.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'right',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'right',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/317385/pexels-photo-317385.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'none',
    brightness: 'dark',
    src: 'https://images.pexels.com/photos/296881/pexels-photo-296881.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'center',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/220421/pexels-photo-220421.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'center',
    brightness: 'light',
    src: 'https://images.pexels.com/photos/325702/pexels-photo-325702.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
  {
    focus: 'center',
    brightness: 'dark',
    src: 'https://images.pexels.com/photos/325703/pexels-photo-325703.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  },
]


