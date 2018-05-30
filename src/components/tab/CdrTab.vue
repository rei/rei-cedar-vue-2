<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div
    v-show="active"
    :aria-hidden="!active"
    class="cdr-tab-container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CdrTab',
  props: {
    name: String,
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tab';
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTab.pcss';
</style>
