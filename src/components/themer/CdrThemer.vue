<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="[backgroundClass]">
    <slot/>
  </div>
</template>

<script>
import { ReactiveProvideMixin } from 'vue-reactive-provide';

export default {
  name: 'CdrThemer',
  mixins: [
    ReactiveProvideMixin({
      name: 'wrapperTheme',
      props: true,
    }),
  ],
  props: {
    theme: {
      type: String,
      default: '',
    },
    background: {
      type: String,
    },
  },
  computed: {
    backgroundClass() {
      return this.background !== '' ? `cdr-bg--${this.background}` : '';
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrThemer.pcss';
</style>
