<template>
  <div
    :class="backgroundClass"
  >
    Toggle background color:
    <cdr-radio
      v-for="bg in backgrounds"
      :custom-value="bg"
      :key="bg"
      name="background"
      v-model="background"
      class="background-toggle"
    >
      {{ capitalize(bg) }}
    </cdr-radio>
    <slot />
  </div>
</template>

<script>

import { CdrRadio } from 'srcdir/index';
import upperFirst from 'lodash/upperFirst';

export default {
  name: 'SinkWrapper',
  components: {
    CdrRadio,
  },
  data() {
    return {
      background: this.$route.query.background || 'primary',
      backgrounds: [
        'primary', 'secondary', 'success', 'info', 'warning', 'error',
      ],
    };
  },
  computed: {
    backgroundClass() {
      return `cdr-space-inset-one-x cdr-color-bg-${this.background}`;
    },
  },
  watch: {
    background() {
      this.$router.push({
        path: this.$router.currentRoute.path,
        query: {
          background: this.background,
        },
      });
    },
  },
  methods: {
    capitalize(str) {
      return upperFirst(str);
    },
  },
};
</script>

<style>
.background-toggle {
  display: inline-block;
  margin: 0 8px;
}

</style>
