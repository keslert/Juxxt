import { randomItem } from '../utils';
import { random, pickBy } from 'lodash';
import LoremIpsum from 'lorem-ipsum';



let memory = {};
export function clearCacheForSubstring(uuid) {
  memory = pickBy(memory, (_, key) => (
    !key.startsWith(uuid)
  ))
}

export function getContent(props) {
  const { uuid, index=0, groupUUID, groupIndex=0, sectionUUID } = props;
  const contentID = sectionUUID + groupUUID + uuid + groupIndex + index;  

  if(!memory[contentID]) {
    let content;
    switch(props.name) {
      case 'Button':
        content = getButtonContent(props);
        break;
      case 'Paragraph':
        content = getParagraphContent(props);
        break;
      case 'Icon':
        content = getIconContent(props);
        break;
      case 'Image':
        content = getImageContent(props);
        break;
      case 'Link':
        content = getLinkContent(props);
        break;
      case 'Heading':
        content = getHeadingContent(props);
        break;
      case 'SmallHeading':
        content = getSmallHeadingContent(props);
        break;
    }
    memory[contentID] = content;
  }
  return memory[contentID];
}

function getButtonContent(props) {
  return randomItem([
    { text: 'Get Started' },
    { text: 'Learn More' },
  ]);
}

function getParagraphContent(props) {
  const text = LoremIpsum({
    count: props.groupIndex !== undefined ? 2 : random(2, 4),
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