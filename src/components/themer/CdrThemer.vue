<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="[backgroundClass]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CdrThemer',
  props: {
    theme: {
      type: String,
      default: '',
    },
    background: {
      type: String,
    },
  },
  provide() {
    return {
      wrapperTheme: this.theme,
    };
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
