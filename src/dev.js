// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'svgxuse';

import './css/main.postcss';
import App from './App';

// test pages
import eaHome from './expertAdvice/Home';
import goResults from './getOutside/Results';

// routing
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/ea', component: eaHome },
  { path: '/go', component: goResults },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#main');
