import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#233b4b', '#4b7176','#b26e3e'];
const colorBlueprint = buildPageColorBlueprint(palette);
const headerImages = [
  { url: '/images/pexel/redRock/arches_split.jpeg' },
  { url: '/images/pexel/redRock/bluesky_redrock.jpeg' },
  { url: '/images/pexel/redRock/cactus_sun_canyon.jpeg' },
  { url: '/images/pexel/redRock/canyon_panaromai.jpeg' },
  { url: '/images/pexel/redRock/compass.jpeg' },
  { url: '/images/pexel/redRock/delicate-arch-night-stars-landscape.jpg' },
  { url: '/images/pexel/redRock/map_cafe.jpeg' },
  { url: '/images/pexel/redRock/map_laptop.jpeg' },
  { url: '/images/pexel/redRock/milky-way-stars-night-sky.jpg' },
  { url: '/images/pexel/redRock/red_rock_fog.jpeg' },
  { url: '/images/pexel/redRock/red_rock_waterfall.jpeg' },
  { url: '/images/pexel/redRock/red_swirls.jpeg' },
  { url: '/images/pexel/redRock/river_trees_canyon.jpeg' },
  { url: '/images/pexel/redRock/road_red_rock.jpeg' },
  { url: '/images/pexel/redRock/snow_arch.jpeg' },
  { url: '/images/pexel/redRock/sunlight_car_trip.jpg' },
  { url: '/images/pexel/redRock/tent_red_rock.jpeg' },
  { url: '/images/pexel/redRock/white_van_in_dust.jpeg' },
];
const images = [
  { url: '/images/pexel/redRock/arches_split.jpeg' },
  { url: '/images/pexel/redRock/bluesky_redrock.jpeg' },
  { url: '/images/pexel/redRock/cactus_sun_canyon.jpeg' },
  { url: '/images/pexel/redRock/canyon_panaromai.jpeg' },
  { url: '/images/pexel/redRock/compass.jpeg' },
  { url: '/images/pexel/redRock/delicate-arch-night-stars-landscape.jpg' },
  { url: '/images/pexel/redRock/map_cafe.jpeg' },
  { url: '/images/pexel/redRock/map_laptop.jpeg' },
  { url: '/images/pexel/redRock/milky-way-stars-night-sky.jpg' },
  { url: '/images/pexel/redRock/red_rock_fog.jpeg' },
  { url: '/images/pexel/redRock/red_rock_waterfall.jpeg' },
  { url: '/images/pexel/redRock/red_swirls.jpeg' },
  { url: '/images/pexel/redRock/river_trees_canyon.jpeg' },
  { url: '/images/pexel/redRock/road_red_rock.jpeg' },
  { url: '/images/pexel/redRock/snow_arch.jpeg' },
  { url: '/images/pexel/redRock/sunlight_car_trip.jpg' },
  { url: '/images/pexel/redRock/tent_red_rock.jpeg' },
  { url: '/images/pexel/redRock/white_van_in_dust.jpeg' },
];
const backgroundImages = [
  { url: '/images/pexel/redRock/arches_split.jpeg' },
  { url: '/images/pexel/redRock/bluesky_redrock.jpeg' },
  { url: '/images/pexel/redRock/cactus_sun_canyon.jpeg' },
  { url: '/images/pexel/redRock/canyon_panaromai.jpeg' },
  { url: '/images/pexel/redRock/compass.jpeg' },
  { url: '/images/pexel/redRock/delicate-arch-night-stars-landscape.jpg' },
  { url: '/images/pexel/redRock/map_cafe.jpeg' },
  { url: '/images/pexel/redRock/map_laptop.jpeg' },
  { url: '/images/pexel/redRock/milky-way-stars-night-sky.jpg' },
  { url: '/images/pexel/redRock/red_rock_fog.jpeg' },
  { url: '/images/pexel/redRock/red_rock_waterfall.jpeg' },
  { url: '/images/pexel/redRock/red_swirls.jpeg' },
  { url: '/images/pexel/redRock/river_trees_canyon.jpeg' },
  { url: '/images/pexel/redRock/road_red_rock.jpeg' },
  { url: '/images/pexel/redRock/snow_arch.jpeg' },
  { url: '/images/pexel/redRock/sunlight_car_trip.jpg' },
  { url: '/images/pexel/redRock/tent_red_rock.jpeg' },
  { url: '/images/pexel/redRock/white_van_in_dust.jpeg' },
];
export default {
  palette,
  backgroundImages,
  typography: {
    heading: { fontFamily: 'Open Sans Condensed' },
  },
  images,
  headerImages,
  colorBlueprint,
  page: {
    sections: [
      {
        name: 'Navbar2',
        style: {
          height: 6,
        },
      },
      {
        name: 'Basic',
        style: {
          height: 12,
          fontFamily: 'Amatic SC',
          fontSize: 4,
          verticalPosition: 3,
          horizontalPosition: 'left',  
        },
        color: {
          backgroundImage: backgroundImages[13].url,
          background: palette[0],
        },
        groups: {
          item: {
            elements: {
              heading: {
                name: 'LargeHeading',
              }
            }
          }
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
        style: {
          order: 'left',
        },
        color: {
          background: colorBlueprint.lightGray,
        },
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
        style: {
          order: 'right',
        }
      },
      {
        name: 'Footer1',
        color: {
          background: colorBlueprint.primary,
        }
      },
    ]
  }
}      