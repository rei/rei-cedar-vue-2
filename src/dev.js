// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import fullSprite from '@rei/cedar-icons/dist/all-icons.svg';
import routes from './router';
import cedarcss from './css/main.scss';

// routing
Vue.use(VueRouter);

const router = new VueRouter({ routes });

export default routes; //eslint-disable-line

Vue.config.productionTip = false;
Vue.config.devtools = false;

/* eslint-disable no-new */
new Vue({
  router,
  data() {
    return {
      routes,
      cedarcss,
      fullSprite,
    };
  },
  mounted() {
    console.log('BACKSTOP_READY');
  },
}).$mount('#main');
