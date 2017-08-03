import { randomItem } from '../../utils';
import { getSection } from '../generator-utils';
import { random } from 'lodash';
import LoremIpsum from 'lorem-ipsum';
import defaultTheme from '../themes';

export function generateContent(element) {

  switch(element.name) {
    case 'BasicHeading':
      return getHeaderContent();
    case 'BasicParagraph':
      return {text: LoremIpsum({count: random(2, 4), units: 'sentences'})};
    case 'ReadableLink':
      return getReadableLinkContent(element);

    case 'BasicImage':
      return getBlockImageContent(element);
    case 'BasicButton':
    case 'SmallButton':
      return getButtonContent();
    case 'ListTitle': 
      return getListTitleContent(element);
    case 'Paragraph':
      return getParagraphContent(element);
    case 'BasicIcon':
      return getIconContent();
    case 'LogoImage':
      return {url: '/images/logo.png'};
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
    { text: 'Download Now', href: '#' },
    { text: 'Try it Now', href: '#' },
    { text: 'Sign Up Free', href: '#' },
    { text: 'View Samples', href: '#' },//View More Examples
    { text: 'Free Trial', href: '#' },
    //for Action section only
    /*{ text: 'Submit', href: '#' },
    { text: 'App Store', href: '#' },
    { text: 'Google Play', href: '#' },*/
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
    {text: "From Dog Walkers and Babysitters, to Hairstylists and Personal Trainers"},
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
    {text: "SmartThings: turn your home into a smart home."},
    {text: "Track, learn, Save, Invest automatically"},
    {text: "Simple, Fast, Customizeable."},
    {text: "The Ultimate Guide to Xsolla"},
    {text: "Easily Customize WordPress Themes, Live."},
    {text: "Litmus makes your email better."},
    {text: "Professionals You Need, From People You Know."},
    {text: "The digital assistant for cost optimization"},
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
  return randomItem(defaultTheme.images);
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

function getBlockImageContent(element) {
  if(element.section.type === 'header') {
    return randomItem(defaultTheme.headerImages);
  }
  return getImageContent();
}

function getReadableLinkContent(element) {
  return randomItem([
    {text: 'Pricing'},
    {text: 'Features'},
    {text: 'Demo'},
    {text: 'About'},
    {text: 'Product'},
    {text: 'ListTitle'},
  ])
}

function getListTitleContent(element) {
  return randomItem([
    {text: 'Help'},
    {text: 'Discover'},
    {text: 'Company'},
  ])
}