import uniqueId from 'lodash/uniqueId';
import { buildPageColorBlueprint } from '../color/page';
const palette = ['#233B4B', '#4B7176','#B26E3E'];
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
          height: 12,
          fontFamily: 'Amatic SC',
          fontSize: 4,
          //Vertical Position: 5, Horizontal Position: left
          verticalPosition: 5,
          horizontalPosition: 'left',  
        },
        color: {
          backgroundImage: backgroundImages[13].url,
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
        style: {
          order: 'left',
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
        style: {
          order: 'right',
        }
      },
      {name: 'Footer1',
      },
    ]
  }
}      