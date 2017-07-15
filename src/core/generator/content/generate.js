import { randomItem } from '../../utils';
import { getSection } from '../generator-utils';
import { random } from 'lodash';
import LoremIpsum from 'lorem-ipsum';

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
      return {src: '/images/logo.png'};
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
    // {src: '/images/openSourceImages2017/baby.jpg'},
    // {src: '/images/openSourceImages2017/burger.jpg'},
    // {src: '/images/openSourceImages2017/beachChairs.jpg'},
    // {src: '/images/openSourceImages2017/camera1.jpg'},
    // {src: '/images/openSourceImages2017/coffee.jpg'},
    // {src: '/images/openSourceImages2017/coffeeMagazineFlower.jpg'},
    // {src: '/images/openSourceImages2017/coupleBikeBeach.jpg'},
    // {src: '/images/openSourceImages2017/fallLeaves2.jpg'},
    // {src: '/images/openSourceImages2017/fancyBurger.jpg'},
    // {src: '/images/openSourceImages2017/fancyFood.jpg'},
    // {src: '/images/openSourceImages2017/fashionGlasses.jpeg'},
    // {src: '/images/openSourceImages2017/greenleaf.jpg'},
    // {src: '/images/openSourceImages2017/kidWithSunglasses.jpg'},
    // {src: '/images/openSourceImages2017/macarons.jpg'},
    // {src: '/images/openSourceImages2017/nyc.jpg'},
    // {src: '/images/openSourceImages2017/oceanSunset.jpg'},
    // {src: '/images/openSourceImages2017/pancake1.jpg'},
    // {src: '/images/openSourceImages2017/railroadShoes.jpg'},
    // {src: '/images/openSourceImages2017/rain.jpg'},
    // {src: '/images/openSourceImages2017/ruralHighway.jpg'},
    // {src: '/images/openSourceImages2017/silhouette.jpg'},
    // {src: '/images/openSourceImages2017/Suit.jpg'},
    // {src: '/images/openSourceImages2017/sunflower.jpg'},
    // {src: '/images/openSourceImages2017/traveler.jpg'},
    // {src: '/images/openSourceImages2017/waterfall.jpg'},
    // {src: 'https://cdn.dribbble.com/users/175710/screenshots/3628199/dribbble-setapp-cat-02.png' },
    // {src: 'https://cdn.dribbble.com/users/1008875/screenshots/3630620/bear.png' },
    // {src: 'https://unsplash.it/400/600?random' },
    // {src: 'https://unsplash.it/400/601?random' },
    // {src: 'https://unsplash.it/400/602?random' },
    // {src: 'https://unsplash.it/600/400?random' },
    // {src: 'https://unsplash.it/601/400?random' },
    // {src: 'https://unsplash.it/602/400?random' },
    // {src: 'http://placehold.it/600x400'},
    // {src: 'http://placehold.it/500x400'},
    // {src: 'http://placehold.it/300x400'},
    //space theme: 
    // {src: 'http://www.clker.com/cliparts/x/w/s/A/3/B/astronaut-hi.png'},
    // {src: 'https://s-media-cache-ak0.pinimg.com/originals/ab/a5/bd/aba5bdbb6a5985ffdf4a73d1729b609a.png'},
    
    //professional & urban theme 
    // {src: 'https://1r65612jvqxn8fcup46pve6b-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/buildings-community.png'},
    // {src: 'http://wibicom.com/Images/icon_city3.png'},
    // {src: 'https://xebialabs.com/assets/files/devops-forum/nyc-icon.png'},
    // {src: 'http://wori88.com/images/transparent-background-business-man-clipart-14.png'},
    // {src: 'https://d1rkab7tlqy5f1.cloudfront.net/_processed_/7/d/csm_IE2_e25f814984.png'}
    //beach theme
    // {src: 'http://cliparting.com/wp-content/uploads/2016/05/Palm-tree-gallery-trees-clipart-clipartix.png'},
    // {src: 'http://images.clipartpanda.com/hawaiian-flower-clip-art-bTypEL9nc.png'},
    // {src: 'https://clipartion.com/wp-content/uploads/2015/11/nautical-clip-art-free.png'},
    // {src: 'https://freeclipartimage.com//storage/upload/orca-clipart/orca-clipart-18.png'},

    //dessert cafe theme
    //{src: 'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/5939b06ee3df282dbda0888f/1496952956394/Tori%27s+Bakeshop+Ca'},
    {src: 'https://s-media-cache-ak0.pinimg.com/736x/8f/dd/3c/8fdd3ccb3a6e4efa9d6750ac2dbdf893--chocolate-layer-cakes-chocolate-coffee.jpg'},
   // {src: 'https://static1.squarespace.com/static/560c1513e4b0c2b900450ac1/t/56df5139a3360c4c27da16f4/1457902255925/Tandem+Coffee%2C+Toronto%2C+Ontario%2C+Canada?format=1500w'},
    {src: 'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {src: 'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {src: 'http://www.howsweeteats.com/wp-content/uploads/2014/08/boozy-coconut-hot-fudge-milkshakes-I-howsweeteats.com-2.jpg'},
    {src: 'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {src: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/28/12/enhanced/webdr02/enhanced-1509-1414514224-18.jpg?crop=395:598;57,0&downsize=715:*&output-format=auto&output-quality=auto'}
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

function getBlockImageContent(element) {
  if(element.section.type === 'header') {
    return randomItem([
    // {src: 'http://images.clipartpanda.com/nature-clip-art-floral.png'},
    // {src: 'https://1r65612jvqxn8fcup46pve6b-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/buildings-community.png'},
    // {src: 'http://wibicom.com/Images/icon_city3.png'},
    // {src: 'https://xebialabs.com/assets/files/devops-forum/nyc-icon.png'},
    // {src: 'http://wori88.com/images/transparent-background-business-man-clipart-14.png'},
    // {src: 'https://d1rkab7tlqy5f1.cloudfront.net/_processed_/7/d/csm_IE2_e25f814984.png'}
    //space theme: 
    // {src: 'http://www.clker.com/cliparts/x/w/s/A/3/B/astronaut-hi.png'},
    // {src: 'https://s-media-cache-ak0.pinimg.com/originals/ab/a5/bd/aba5bdbb6a5985ffdf4a73d1729b609a.png'},
    //beach theme
    // {src: 'http://cliparting.com/wp-content/uploads/2016/05/Palm-tree-gallery-trees-clipart-clipartix.png'},
    // {src: 'http://images.clipartpanda.com/hawaiian-flower-clip-art-bTypEL9nc.png'},
    // {src: 'https://clipartion.com/wp-content/uploads/2015/11/nautical-clip-art-free.png'},
    // {src: 'https://freeclipartimage.com//storage/upload/orca-clipart/orca-clipart-18.png'},
    // {src: 'http://clipartix.com/wp-content/uploads/2016/05/Ship-clip-art-clipart-image-clipartcow.png'},
    // //{src: 'http://images.all-free-download.com/images/graphiclarge/space_astronaut_holding_flag_vector_illustration_6825237.jpg'},
    //dessert cafe theme
    {src: 'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'},
    {src: 'https://www.theurbanlist.com/content/article/New-Opening-Elisabeth-Dessert-Cafe-5.jpg'},
    {src: 'https://4.bp.blogspot.com/-G15GpgI5hR4/VxzlyIKd8II/AAAAAAAAJ58/yK3PGliFyYAqCNJaeuYZyGgX2p8jRyiXgCLcB/s1600/IMG_3360.JPG'},
    {src: 'https://www.klnow.com.my/wp-content/uploads/sites/2/2017/01/b4-7.jpg'}

    ]);
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