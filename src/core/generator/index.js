import { layouts } from '../../components/layouts/all';
import { collections } from '../../components/collections/all';
import { elements } from '../../componenets/elements/all';
import { random } from '../utils';
import { keys, range } from 'lodash';

import { selectTheme, selectLayoutShade } from './color';


export function generate() {

  const baseFontSize = 15;
  const theme = selectTheme();

  return {
    baseFontSize,
    theme,
    content: {
      sections: range(0, 3).map(() => generateSection(baseFontSize, theme)),
    }
  }







}

function generateSection(baseFontSize, theme) {
  const layoutName = selectLayout();
  const layout = layouts[name];

  const shade = selectLayoutShade();
  const background = shade === 'light' ? random(theme.light) : random(theme.dark);
  const collectionName = selectCollection();




  return {
    name: layoutName,
    props: {},
    collections: collectionNames.map(name => ({
      name,

    }))
  }

}

function selectCollection() {
  const name = random(keys(collections));
  return name;
}




function selectLayout() {
  const name = random(keys(layouts));
  return name;
}










const data = {


  baseFontSize: 15,
  


  header: true,
  content: {
    sections: [{
      name: 'BasicLayout',
      props: {},

      collection: {
        name: 'TripleDecker',
        props: {
          head: {
            name: 'Icon',
            props: { name: 'plane' }
          },
          paragraph: {
            name: 'Paragraph',
            props: { color: '#333' },
          },
          foot: {
            name: 'Button',
            props: { type: randomItem(buttonVariations.type.options), icon: randomItem(buttonVariations.icon.options), size: randomItem(buttonVariations.size.options), background: '#544373', color: 'white' },
          }
        }
      },
    },
    {
      name: 'VerticalSplitLayout',
      props: {},
      collections: [
        {
          name: 'TripleDecker',
          props: {
            head: {
              name: 'Icon',
              props: { name: 'plane' }
            },
            paragraph: {
              name: 'Paragraph',
              props: { color: '#333' },
            },
            foot: {
              name: 'Button',
              props: { type: randomItem(buttonVariations.type.options), icon: randomItem(buttonVariations.icon.options), size: randomItem(buttonVariations.size.options), background: '#544373', color: 'white' },
            }
          }
        },
        {
          name: 'TripleDecker',
          props: {
            head: {
              name: 'Icon',
              props: { name: 'plane' }
            },
            paragraph: {
              name: 'Paragraph',
              props: { color: '#333' },
            },
            foot: {
              name: 'Button',
              props: { type: randomItem(buttonVariations.type.options), icon: randomItem(buttonVariations.icon.options), size: randomItem(buttonVariations.size.options), background: '#544373', color: 'white' },
            }
          }
        },
      ]
    }]
  },
  footer: true,
}