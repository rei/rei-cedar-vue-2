import Accordions from 'componentsdir/accordion/examples/Accordion';
import Buttons from 'componentsdir/button/examples/Buttons';
import Cards from 'componentsdir/card/examples/Cards';
import CheckBoxes from 'componentsdir/checkbox/examples/checkboxes';
import Cta from 'componentsdir/cta/examples/Cta';
import Grids from 'componentsdir/grid/examples/Grid';
import Icons from 'componentsdir/icon/examples/Icons';
import Images from 'componentsdir/image/examples/Images';
import Links from 'componentsdir/link/examples/Links';
import Lists from 'componentsdir/list/examples/Lists';
import MediaObjects from 'componentsdir/mediaObject/examples/mediaObject';
import Quotes from 'componentsdir/quote/examples/Quote';
import Radios from 'componentsdir/radio/examples/Radios';
import Ratings from 'componentsdir/rating/examples/Ratings';
import Selects from 'componentsdir/select/examples/Selects';
import Texts from 'componentsdir/text/examples/Text';

import ActivityCards from 'compositionsdir/activityCard/examples/activity';
import Captions from 'compositionsdir/caption/examples/Caption';
import Searches from 'compositionsdir/search/examples/searchbox';
import App from './App';

const routes = [
  { path: '/', component: App },
  { path: '/accordion', name: 'Accordion', component: Accordions },
  { path: '/buttons', name: 'Buttons', component: Buttons },
  { path: '/cards', name: 'Cards', component: Cards },
  { path: '/checkboxes', name: 'CheckBoxes', component: CheckBoxes },
  { path: '/cta', name: 'CTA', component: Cta },
  { path: '/grids', name: 'Grids', component: Grids },
  { path: '/icons', name: 'Icons', component: Icons },
  { path: '/images', name: 'Images', component: Images },
  { path: '/links', name: 'Links', component: Links },
  { path: '/lists', name: 'Lists', component: Lists },
  { path: '/mediaobjects', name: 'Media Objects', component: MediaObjects },
  { path: '/quotes', name: 'Quotes', component: Quotes },
  { path: '/radios', name: 'Radios', component: Radios },
  { path: '/ratings', name: 'Ratings', component: Ratings },
  { path: '/selects', name: 'Selects', component: Selects },
  { path: '/texts', name: 'Texts', component: Texts },
  { path: '/activitycards', name: 'ActivityCards', component: ActivityCards },
  { path: '/captions', name: 'Captions', component: Captions },
  { path: '/searches', name: 'Searches', component: Searches },
];

export default routes;
