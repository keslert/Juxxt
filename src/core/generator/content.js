import { randomItem } from '../utils';
import { random, pickBy } from 'lodash';
import LoremIpsum from 'lorem-ipsum';



let memory = {};
export function clearCacheForElement(element) {
  delete memory[element.uuid];
}

export function setCacheForElement(element, value) {
  memory[element.uuid] = value;
}

export function getContent(element) {
  const key = element.uuid;
  if(!memory[key]) {
    let content;
    switch(element.name) {
      case 'Button':
        content = getButtonContent(element);
        break;
      case 'Paragraph':
        content = getParagraphContent(element);
        break;
      case 'Icon':
        content = getIconContent(element);
        break;
      case 'Image':
        content = getImageContent(element);
        break;
      case 'Link':
        content = getLinkContent(element);
        break;
      case 'Heading':
        content = getHeadingContent(element);
        break;
      case 'SmallHeading':
        content = getSmallHeadingContent(element);
        break;
    }
    memory[key] = content;
  }
  return memory[key];
}

function getButtonContent(props) {
  return randomItem([
    { text: 'Get Started' },
    { text: 'Learn More' },
  ]);
}

function getParagraphContent(props) {
  const text = LoremIpsum({
    count: random(2, 4),
    units: 'sentences',
  });
  return { text };
}

function getIconContent(props) {
  return randomItem([
    { type: 'rocket' },
    { type: 'plane' },
    { type: 'pencil' },
    { type: 'address-book' },
    { type: 'camera-retro' },
    { type: 'diamond' },
    { type: 'dashboard' },
    { type: 'calendar' },
    { type: 'bolt' },
    { type: 'desktop' },
  ])
}

function getImageContent(props) {
  return randomItem([
    // { src: 'https://unsplash.it/400/600?random' },
    // { src: 'https://unsplash.it/400/601?random' },
    // { src: 'https://unsplash.it/400/602?random' },
    // { src: 'https://unsplash.it/600/400?random' },
    // { src: 'https://unsplash.it/601/400?random' },
    // { src: 'https://unsplash.it/602/400?random' },
    { src: 'http://placehold.it/600x400'},
  ]);
}

function getLinkContent(props) {
  const text = LoremIpsum({
    count: 1,
    units: 'words',
  });
  return { text };
}

function getHeadingContent(props) {
  const text = LoremIpsum({
    count: random(3, 6),
    units: 'words',
  });
  return { text };
}

function getSmallHeadingContent(props) {
  const text = LoremIpsum({
    count: random(2, 4),
    units: 'words',
  });
  return { text };
}