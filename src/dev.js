// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';

import './css/main.postcss';
import '../static/cdr-fonts.css';


Vue.config.devtools = false;
// routing
Vue.use(VueRouter);

const router = new VueRouter({ routes });

export default routes; //eslint-disable-line

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#main');
