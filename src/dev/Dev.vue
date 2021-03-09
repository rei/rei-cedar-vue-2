<script>

import fullSprite from '@rei/cedar-icons/dist/all-icons.svg';
import SinkWrapper from './SinkWrapper.vue'; // eslint-disable-line
import { CdrLink } from '../index';
import cedarcss from '../css/main.scss';
import routes from './router';

export default {
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
  computed: {
    isBackstop() {
      return this.$router.currentRoute.query.backstop;
    },
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
    console.log('BACKSTOP_READY'); // eslint-disable-line
  },
};
</script>

<template>
  <div
    class="cdr-container-fluid"
    ref="focusWrapper"
  >
    <router-link
      to="#content"
      append
      v-slot="{ href, route, navigate }"
    ><cdr-link
      :href="href"
      @click="navigate"
      class="cdr-display-sr-focusable"
    >Skip to content</cdr-link></router-link>
    <!-- NOTE: For dev environment only, do not load icon sprites in JS in production -->
    <!-- eslint-disable vue/no-v-html -->
    <div
      style="display:none"
      v-html="fullSprite"
    />
    <ul
      style="padding:0"
      v-if="!isBackstop"
    >
      <li
        class="cdr-space-inset-quarter-x"
        style="display:inline-flex"
        v-for="r in routes"
        :key="r.name"
      >
        <router-link
          v-if="r.name"
          :key="r.path"
          :to="r.path"
          v-slot="{ href, route, navigate, isActive }"
        >
          <cdr-link
            :href="href"
            @click="navigate"
            :aria-current="isActive ? 'page' : false"
          >
            {{ (isActive && route.name !== ' ') ? `${route.name}` : route.name }}
          </cdr-link>
        </router-link>
      </li>
    </ul>
    <hr>
    <h1
      id="content"
      ref="focusTarget"
    >
      REI Cedar
    </h1>

    <sink-wrapper>
      <div class="cdr-mt-space-two-x">
        <router-view />
      </div>
    </sink-wrapper>
  </div>
</template>
