import layouts from '../../components/layouts/all';
import collections from '../../components/collections/all';
import elements from '../../components/elements/all';
import { randomItem } from '../utils';
import { keys, range, map, reduce, zipObject, isEmpty } from 'lodash';

import { selectTheme, selectLayoutShade } from './color';


export function generate() {
  const baseFontSize = 15;
  const theme = selectTheme();

  return {
    baseFontSize,
    theme,
    content: {
      layouts: range(0, 3).map(() => generateLayout(baseFontSize, theme)),
    }
  }
}


// A layout must request at least one color scheme;
function generateLayout(baseFontSize, theme) {
  const layoutName = selectLayout();
  const layout = layouts[layoutName];

  const shade = selectLayoutShade();
  const background = shade === 'light' ? randomItem(theme.light) : randomItem(theme.dark);
  
  const _keys = keys(layout.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = layout.requirements[key];
    if(req.type === 'Collection') {
      return generateCollection(req.options);
    } else {
      return randomItem(req.options);
    }
  }))

  return {
    name: layoutName,
    requirements,
    overrides: {},
  }

}


function generateCollection(options) {
  const collectionName = selectCollection(options);
  const collection = collections[collectionName];

  const _keys = keys(collection.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = collection.requirements[key];
    if(req.type === 'Element') {
      return generateElement(req.options);
    } else {
      return randomItem(req.options);
    }
  }))

  return {
    name: collectionName,
    requirements,
    overrides: {},
  }
}

function generateElement(options) {
  const elementName = selectElement(options);
  const element = elements[elementName];

  const _keys = keys(element.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = element.requirements[key];
    return randomItem(req.options);
  }))

  return {
    name: elementName,
    requirements,
    overrides: {},
  }
}


function selectElement(options) {
  const name = randomItem(options);
  return name;
}

function selectCollection(options) {
  const _options = isEmpty(options) ? keys(collections) : options;
  const name = randomItem(_options);
  return name;
}


function selectLayout() {
  const name = randomItem(keys(layouts));
  return name;
}