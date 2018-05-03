// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import './css/main.postcss';
import '../static/cdr-fonts.css';
import App from './App';

Vue.config.devtools = false;
// routing
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#main');
