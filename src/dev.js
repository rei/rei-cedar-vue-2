// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import fullSprite from '@rei/cedar-icons/dist/all-icons.svg';
import routes from './router';
import SinkWrapper from './SinkWrapper.vue'; // eslint-disable-line
import { CdrLink } from './index';
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
  components: {
    SinkWrapper,
    CdrLink,
  },
  data() {
    return {
      routes,
      cedarcss,
      fullSprite,
    };
  },
  watch: {
    // Adapted from https://marcus.io/blog/accessible-routing-vuejs
    $route(to, from) {
      // updating query (for background radios) so don't alter focus
      if (to.hash === '' && to.path === from.path) return;

      // Get focus target after nav
      // If not existent, use container so skip link is first again
      const focusTarget = (to.hash)
        ? this.$refs.focusTarget
        : this.$refs.focusWrapper;
      // Make focustarget programmatically focussable
      focusTarget.setAttribute('tabindex', '-1');
      // Focus element
      focusTarget.focus();
      // Remove tabindex from focustarget.
      // Reason: https://axesslab.com/skip-links/#update-3-a-comment-from-gov-uk
      focusTarget.removeAttribute('tabindex');
    },
  },
  mounted() {
    console.log('BACKSTOP_READY');
  },
}).$mount('#main');
