// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Buttons from 'componentsdir/button/examples/Buttons';
import Cards from 'componentsdir/card/examples/Cards';
import CheckBoxes from 'componentsdir/checkbox/examples/checkboxes';
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

import './css/main.postcss';
import '../static/cdr-fonts.css';
import App from './App';

Vue.config.devtools = false;
// routing
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/buttons', component: Buttons },
  { path: '/cards', component: Cards },
  { path: '/checkboxes', component: CheckBoxes },
  { path: '/grids', component: Grids },
  { path: '/icons', component: Icons },
  { path: '/images', component: Images },
  { path: '/links', component: Links },
  { path: '/lists', component: Lists },
  { path: '/mediaobjects', component: MediaObjects },
  { path: '/quotes', component: Quotes },
  { path: '/radios', component: Radios },
  { path: '/ratings', component: Ratings },
  { path: '/selects', component: Selects },
  { path: '/texts', component: Texts },

  { path: '/activitycards', component: ActivityCards },
  { path: '/captions', component: Captions },
  { path: '/searches', component: Searches },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#main');
