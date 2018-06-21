<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div
    v-show="active"
    :aria-hidden="!active"
    :class="[modifierClass]">
    <slot/>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrTab',
  mixins: [modifier],
  props: {
    name: String,
    id: String,
  },
  data() {
    return {
      active: false,
      offsetX: 0,
      tabId: this.id || this.key,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tab';
    },
  },
  methods: {
    setActive(state) {
      this.active = state;
    },
    setOffsetX(x) {
      console.log('KRIS set offset X called with ', x);
      this.offsetX = x;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTab.pcss';
</style>
