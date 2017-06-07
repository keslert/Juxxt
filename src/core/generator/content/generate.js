import { randomItem } from '../../utils';
import { random, pickBy } from 'lodash';
import LoremIpsum from 'lorem-ipsum';

export function generateContent(element) {

  switch(element.name) {
    case 'Button':
      return getButtonContent(element);
    case 'Paragraph':
      return getParagraphContent(element);
    case 'Icon':
      return getIconContent(element);
    case 'Image':
      return getImageContent(element);
    case 'Link':
      return getLinkContent(element);
    case 'Heading':
      return getHeadingContent(element);
    case 'SmallHeading':
      return getSmallHeadingContent(element);
    default: 
      return getGenericContent(element)
  }
}

function getGenericContent(element) {
  switch(element.is) {
    case 'Text':
      return { text: 'I am a ' + element.name };
    case 'Link':
      return { text: "Link" };
    case 'Image':
      return { src: 'http://placehold.it/600x400' };
    default:
      return { badContent: true };
  }
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
    { src: 'https://unsplash.it/400/600?random' },
    { src: 'https://unsplash.it/400/601?random' },
    { src: 'https://unsplash.it/400/602?random' },
    { src: 'https://unsplash.it/600/400?random' },
    { src: 'https://unsplash.it/601/400?random' },
    { src: 'https://unsplash.it/602/400?random' },
    // { src: 'http://placehold.it/600x400'},
    // { src: 'http://placehold.it/500x400'},
    // { src: 'http://placehold.it/300x400'},
    // { src: 'http://placehold.it/200x400'},
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