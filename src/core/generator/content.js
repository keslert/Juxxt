import { randomItem } from '../utils';
import { random } from 'lodash';
import LoremIpsum from 'lorem-ipsum';



const memory = {};
export function generateContent(props) {
  const { uuid, name, index } = props;
  const _uuid = `${uuid}-${index}`;

  if(!memory[_uuid]) {
    let content;
    switch(name) {
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
      case 'Heading':
        content = getHeadingContent(props);
        break;
      case 'SmallHeading':
        content = getSmallHeadingContent(props);
        break;
    }
    memory[_uuid] = content;
  }
  return memory[_uuid];
}

function getButtonContent(props) {
  return randomItem([
    { text: 'Get Started' },
    { text: 'Learn More' },
  ]);
}

function getParagraphContent(props) {

  const text = LoremIpsum({
    count: props.index !== undefined ? 2 : random(2, 4),
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
    { src: 'https://placehold.it/500x400' },
  ]);
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