import { randomItem } from '../../utils';
import { random } from 'lodash';
import LoremIpsum from 'lorem-ipsum';

export function generateContent(element) {

  switch(element.name) {
    case 'BasicHeading':
      return getHeaderContent();
    case 'BasicParagraph':
      return {text: LoremIpsum({count: random(2, 4), units: 'sentences'})};
    case 'BasicButton':
      return getButtonContent();
    case 'Paragraph':
      return getParagraphContent(element);
    case 'BasicIcon':
      return getIconContent();
    case 'LogoImage':
      return {src: 'http://acmelogos.com/images/logo-8.svg'};
    case 'Link':
      return getLinkContent(element);
    case 'Heading':
      return getHeadingContent(element);
    case 'SmallHeading':
      return getSubheaderContent(element);
    case 'BasicSubheading':
      return getSubheaderContent(element);
    default: 
      return getGenericContent(element)
  }
}

function getGenericContent(element) {
  switch(element.is) {
    case 'Text':
    case 'Link':
      return { text: 'I am a ' + element.name };
    case 'Image':
      return getImageContent();
    default:
      return { badContent: true };
  }
}

function getButtonContent() {
  return randomItem([
    { text: 'Get Started', href: '#' },
    { text: 'Learn More', href: '#' },
  ]);
}

function getParagraphContent() {
  const text = LoremIpsum({
    count: random(2, 4),
    units: 'sentences',
  });
  return { text };
}
function getSubheaderContent() {
  return randomItem([
    {text: "Oval is creating a platform that helps everyone be money wise."},
    {text: "Business Oriented. Gamer Driven."},
    {text: "Borrow specialized talent or add revenue by sharing your roster."},
    {text: "From Dog Walkers and Babysitters, to Hairstylists and Personal Trainers, to ...."},
    {text: "Fully automated invoicing directly from your CRM."},
    {text: "Upload images from your webapp directly to Amazon S3"},
    {text: "Zendesk builds software for better customer relationships"},
    {text: "The new way to interact with empolyees and vendors"},
    {text: "Serve fast maps from your infrastructure"},
    {text: "Stay ahead of the curve and make smarter decisions with the most advanced app analytics"},
  ])
}

function getHeaderContent() {
  return randomItem([
    {text: "SmartThings is the easy way to turn your home into a smart home."},
    {text: "Track, learn, Save, Invest automatically"},
    {text: "The Ultimate Guide to Xsolla Services and Products"},
    {text: "Easily Customize WordPress Themes, Live."},
    {text: "Short-term empolyee leasing between like-minded startups"},
    {text: "Litmus makes your email better."},
    {text: "Professionals You Need, From People You Know."},
    {text: "The digital  Assistant for cost optimization"},
    {text: "Convert your deals into invoices."},
    {text: "Try out a fresh look for YouTube"},
    {text: "Meet pixel. Phone by Google."}
  ])
}

function getIconContent() {
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
    { src: 'https://cdn.dribbble.com/users/175710/screenshots/3628199/dribbble-setapp-cat-02.png' },
    { src: 'https://cdn.dribbble.com/users/1008875/screenshots/3630620/bear.png' },
    // { src: 'https://unsplash.it/400/600?random' },
    // { src: 'https://unsplash.it/400/601?random' },
    // { src: 'https://unsplash.it/400/602?random' },
    // { src: 'https://unsplash.it/600/400?random' },
    // { src: 'https://unsplash.it/601/400?random' },
    // { src: 'https://unsplash.it/602/400?random' },
    // { src: 'http://placehold.it/600x400'},
    // { src: 'http://placehold.it/500x400'},
    // { src: 'http://placehold.it/300x400'},
  ]);
}

function getLinkContent(props) {
  const text = LoremIpsum({
    count: 1,
    units: 'words',
  });
  return { text, href: '#' };
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